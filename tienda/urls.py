from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='index'),
    path('', views.registro, name='registro'),
    path('', views.us, name='sobrenos'),
    path('agregar-producto', views.agregar_producto, name='agregar-producto'),
]