from django.urls import path, re_path
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    path('books', views.createBook, name='index'),
    path('users', views.createUser, name='create'),
    path('deleteBook',views.deleteBook, name='deleteBook'),
    path('deleteUser',views.deleteUser, name='deleteUser'),
    path('editUser',views.editUser, name='editUser')
]

