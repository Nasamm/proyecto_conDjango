from django.shortcuts import render
from .models import Producto

# Create your views here.
def home(request):

    #SELECT
    productos = Producto.objects.all()
    data ={"productos": productos}

    return render(request, 'tienda/index.html', data)

def agregar_producto(request):
    return render(request='tienda/producto/agregar.html')

def registro(request):

    return render(request, 'tienda/registro.html')

def us(request):

    return render(request, 'tienda/sobrenos.html')