from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db,bcrypt

class Bid(SerializerMixin, db.Model):
    __tablename__="bids"

    serialize_rules = ('-listing.bids','-user.bids')

    id=db.Column(db.Integer,primary_key=True)
    bid_amount=db.Column(db.Integer)
    listing_id=db.Column(db.Integer,db.ForeignKey('listings.id'))
    users_id=db.Column(db.Integer,db.ForeignKey('users.id'))
    created_at=db.Column(db.DateTime, server_default=db.func.now())
    listing = db.relationship('Listing', back_populates = 'bids')
    user = db.relationship('User', back_populates = 'bids')



class Listing(SerializerMixin, db.Model):
    __tablename__="listings"

    serialize_rules = ('-bids.listing',)

    id=db.Column(db.Integer,primary_key=True)
    price=db.Column(db.String)
    image=db.Column(db.String)
    shoeName=db.Column(db.String)
    description=db.Column(db.String)
    brand=db.Column(db.String)
    favorite=db.Column(db.Boolean)
    user_id=db.Column(db.Integer)
    bids = db.relationship('Bid', back_populates = 'listing', cascade = 'all, delete-orphan')
    users = association_proxy('bids', 'user')

    


class User(SerializerMixin, db.Model):
    __tablename__ = 'users'

    serialize_rules =('-password_hash','-bids.user')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    username = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    bids = db.relationship('Bid', back_populates = 'user', cascade = 'all, delete-orphan')
    listings = association_proxy('bids', 'listing')

    @property 
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash (self, plain_text_password):
        byte_object = plain_text_password.encode('utf-8')
        encrypted_password_object = bcrypt.generate_password_hash(byte_object)
        hashed_password = encrypted_password_object.decode('utf-8')
        self._password_hash = hashed_password

    def authenticate(self, password_string):
        byte_object = password_string.encode('utf-8')
        return bcrypt.check_password_hash(self.password_hash,byte_object)