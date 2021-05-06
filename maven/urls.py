from django.urls import path, re_path
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    path('books', views.createBook, name='index'),
    path('users', views.createUser, name='create'),
]
