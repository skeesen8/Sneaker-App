from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db,bcrypt

class User(SerializerMixin, db.Model):
    __tablename__ = 'users'

    serialize_rules =('-password_hash',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    username = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

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