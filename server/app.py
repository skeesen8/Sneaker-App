#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request,make_response,session
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import User
# Add your model imports


# Views go here!

class Users(Resource):
    def post(self):
        data = request.get_json()
        user = User(name=data['name'], username=data['username'], email = data['email'], password_hash = data['password'])
        db.session.add(user)
        db.session.commit()
        session ['user_id']=user.id
        return make_response({'user':user.to_dict()},201)
    
api.add_resource(Users, '/api/v1/users')


@app.route('/api/v1/authorized')
def authorized():
    try:
        user = User.query.filter_by(id=session.get('user_id')).first()
        return make_response(user.to_dict(), 200)
    except:
        return make_response({ "error": "User not found"}, 404)

    

@app.route('/api/v1/logout',methods=['DELETE'])
def logout():
    session['user_id']=None
    return make_response('',204)   

@app.route('/api/v1/login',methods=['POST'])
def login():
    data = request.get_json()
    try:
        user = User.query.filter_by(username=data['username']).first()
        if user.authenticate(data['password']):
            session ['user_id'] = user.id
            return make_response ({'user':user.to_dict()},200)
    except:
        return make_response({"error":"password or username invalid"},401)


@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

