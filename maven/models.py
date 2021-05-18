from django_cryptography.fields import encrypt
from django.db import models
from django.db.models.fields import EmailField, FloatField

# Create your models here.
class User(models.Model):
    ID = models.UUIDField(primary_key=True,default=True,editable=False)
    username = models.CharField(blank=True,max_length=255)
    password = encrypt(models.CharField(blank=True,max_length=30))
        
class Books(models.Model):
    owner_ID = models.UUIDField(blank=True,editable=False,default=None)
    ISBN = models.CharField(blank=True,max_length=255)
    title = models.CharField(blank=True,max_length=255)
    author = models.CharField(blank=True,max_length=255)
    genre = models.CharField(blank=True,max_length=255)
    description = models.CharField(blank=True,max_length=5000)
    price = FloatField(default=0,blank=True)

def __str__(self):
    return self.name
