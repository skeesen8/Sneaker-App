#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request,make_response
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
        return make_response({'user':user.to_dict()},201)
    
api.add_resource(Users, '/api/v1/users')



@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

