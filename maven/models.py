from django.db import models
from django.db.models.fields import EmailField

# Create your models here.
class User(models.Model):
    username = models.CharField(blank=True,max_length=255)
    password = models.CharField(blank=True,max_length=30)
        
class Books(models.Model):
    ISBN = models.CharField(blank=True,max_length=255)
    title = models.CharField(blank=True,max_length=255)
    author = models.CharField(blank=True,max_length=255)
    genre = models.CharField(blank=True,max_length=255)
    description = models.CharField(blank=True,max_length=255)

def __str__(self):
    return self.name
