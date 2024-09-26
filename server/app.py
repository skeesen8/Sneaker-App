#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request,make_response,session
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import User,Listing,Bid
# Add your model imports


# Views go here!

class Listings(Resource):
    def post(self):
        params=request.get_json()
        listing=Listing(price=params['price'],
                        brand=params['brand'],
                        shoeName=params['shoeName'],
                        image=params['image'],
                        description=params['description'],
                        favorite = params['favorite'],
                        user_id = session.get('user_id')
                )
        db.session.add(listing)
        db.session.commit()
        return make_response(listing.to_dict(),202)
        
    
api.add_resource(Listings,'/api/v1/listings')

class Bids(Resource):
    def post(self):
        params=request.get_json()
        bid=Bid(bid_amount=params['bid_amount'],
                listing_id=params['listing_id'],
                users_id=params['users_id'],
                )
                # created_at=params['created_at'])
        db.session.add(bid)
        db.session.commit()
        return make_response(bid.to_dict(),200)
    
    def get(self):
        bids=[bid.to_dict() for bid in Bid.query.all()]
        if not bids:
            return make_response({'error':'no bids'}, 400)
        return make_response(bids,200)


api.add_resource(Bids,"/api/v1/bids")


class Bid_By_Id(Resource):
    def delete(self,id):
        bid = Bid.query.get(id)
        if not bid:
            return make_response({'error':'bid not found'},400)
        else:
            db.session.delete(bid)
            db.session.commit()
            return make_response('', 200)
        
    def get(self,id):
        bid = Bid.query.get(id)
        if not bid:
            return make_response({'error':'bid not found'})
        else:
            return make_response(bid.to_dict(),200)
        
api.add_resource(Bid_By_Id,'/api/v1/bids/<id>')


class Get_All_Listings(Resource):
    def get(self):
        listings=[listing.to_dict() for listing in Listing.query.all()]
        if not listings:
            return make_response({'error':'no listings'}, 400)
        return make_response(listings,200)
    
    
api.add_resource(Get_All_Listings,'/api/v1/listings')

class Listing_by_Id(Resource):
    def get(self,id):
        listing = Listing.query.get(id)
        if not listing:
            return make_response({'error':"listing not found"},404)
        else:
            return make_response(listing.to_dict(),202)
        
    def delete(self,id):
        shoe = Listing.query.get(id)
        if not shoe:
            return make_response({'error':'shoe not found'})
        else:
            db.session.delete(shoe)
            db.session.commit()
            return make_response(shoe.to_dict(),204)

        
api.add_resource(Listing_by_Id,"/api/v1/listings/<id>")


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

