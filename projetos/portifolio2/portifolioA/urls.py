from django.contrib import admin
from django.urls import path,include
from . import views
# import views

urlpatterns = [
    path('', views.index, name='index'),
    path('calculadora/', views.proj_calc, name = 'calculadora'),
]