from django.shortcuts import render, redirect , get_object_or_404
from .models import Producto
from .forms import ProductoForm
from .forms import LoginForm

# Create your views here.
def home(request):
    #SELECT
    productos = Producto.objects.all()
    data ={"productos": productos}
    return render(request, 'tienda/index.html', data)

def brushed_admin(request):
    #SELECT
    productos = Producto.objects.all()
    data ={"productos": productos}
    return render(request, 'tienda/brushed-admin.html', data)

def customer_login(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            print("VALIDO!")
            print(form.cleaned_data["captcha"])
            return redirect('index')
        else:
            print("INVALIDO!")
    else:

        form = LoginForm()

    context = {"form": form}
    return render(request, 'tienda/login.html',context)

# def login(request):
#     if request.method == "POST":
#         username = request.POST['logUsuario']
#         password = request.POST['password']
#         User = authenticate(request, username = username, password = password)
#         if User is not None:
#             login(request, User,)
#             return redirect('index')
#         else:
#             messages.error(request, "Has tenido un error al iniciar sesión")
#             return HttpResponseRedirect('.')
#     else:
#         return render(request, 'tienda/login.html')


def agregar_producto(request):
    data = {'form' : ProductoForm()}

    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Guardado correctamente"
        else:
            data['form'] = formulario

    return render(request,'tienda/producto/agregar.html', data)

def listar_producto(request):
    productos = Producto.objects.all()
    data = {'productos': productos}

    return render(request, 'tienda/producto/listar.html', data)

def modificar_producto(request, id):
    producto = get_object_or_404(Producto, id = id)
    data = {'form' : ProductoForm(instance=producto)}

    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST, instance=producto, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"]= "Producto Modificado correctamente"
            return redirect(to= "listar-producto")
        data['form'] = formulario

    return render(request, 'tienda/producto/modificar.html', data)

def eliminar_producto(request, id):
    producto = get_object_or_404(Producto, id = id)
    producto.delete()
    return redirect(to="listar-producto")

def registro(request):

    return render(request, 'tienda/registro.html')

def us(request):

    return render(request, 'tienda/sobrenos.html')

def fc1(request):

    return render(request, 'tienda/fc1.html')

def fc2(request):

    return render(request, 'tienda/fc2.html')

def fc3(request):

    return render(request, 'tienda/fc3.html')