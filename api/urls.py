from django.contrib import admin
from .views import main
from django.urls import path

urlpatterns = [
    path('home', main)
]
