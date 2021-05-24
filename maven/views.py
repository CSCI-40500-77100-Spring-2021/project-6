from django.shortcuts import render
from .models import Books, User
from django.core import serializers
from django.http import HttpResponse
from maven.models import User
import uuid
# Create your views here.
def index(request):
    all_objects = list(User.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')

def createUser(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        User.objects.create(ID=uuid.uuid4(),username=username,password=password)
        
    all_objects = list(User.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')

def createBook(request):
    if request.method == "POST":
        owner_id = request.POST.get("owner_id")
        ISBN = request.POST.get('ISBN')
        title = request.POST.get('title')
        author = request.POST.get('author')
        genre = request.POST.get('genre')
        description = request.POST.get('description')
        price = request.POST.get('price')
        Books.objects.create(owner_ID=owner_id,ISBN=ISBN,title=title,author=author,genre=genre,description=description,price=price)

    all_objects = list(Books.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')

def deleteBook(request):
    if request.method == "POST":
        owner_id = request.POST.get('owner_id')
        ISBN = request.POST.get('ISBN')
        Books.objects.filter(owner_id, ISBN).delete()
    
    all_objects = list(Books.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')