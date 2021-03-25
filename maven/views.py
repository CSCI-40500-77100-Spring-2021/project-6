from django.shortcuts import render
from .models import User
from django.core import serializers
from django.http import HttpResponse
from maven.models import User
# Create your views here.
def index(request):
    all_objects = list(User.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')

def createUser(request):
    if request.method == "POST":
        print(request.POST)
        username = request.POST.get('username')
        password = request.POST.get('password')
        User.objects.create(username=username,password=password)
        
    all_objects = list(User.objects.all())
    ao_json = serializers.serialize('json', all_objects)
    return HttpResponse(ao_json, content_type='application/json')
