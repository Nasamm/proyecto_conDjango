from django.urls import path
from . import views
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url='/home') ),
    path('home',views.home, name='index'),
    path('brushed-admin',views.brushed_admin,name='brushed-admin'),
    path('registro', views.registro, name='registro'),
    path('sobre-nosotras', views.us, name='sobrenos'),
    path('login',views.customer_login, name='login'),
    path('agregar-producto', views.agregar_producto, name='agregar-producto'),
    path('listar-producto', views.listar_producto, name='listar-producto'),
    path('modificar-producto/<id>', views.modificar_producto, name='modificar-producto'),
    path('eliminar-producto/<id>', views.eliminar_producto, name='eliminar-producto'),
    path('fc1', views.fc1, name='fc1'),  
    path('fc2', views.fc2, name='fc2'),  
    path('fc3', views.fc3, name='fc3'),  
]