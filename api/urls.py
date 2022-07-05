from django.contrib import admin
from .views import RoomView, CreateRoomView, GetRoomView
from django.urls import path

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoomView.as_view())
]
