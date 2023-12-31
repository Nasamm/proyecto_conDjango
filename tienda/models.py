from django.db import models

# Create your models here.
class Marca(models.Model):
    nombre = models.CharField(max_length=70)

    def __str__(self):
        return self.nombre

class Producto(models.Model):
    nombre = models.CharField(max_length=70)
    caracteristica = models.CharField(max_length=400)
    precio = models.IntegerField()
    marca = models.ForeignKey(Marca, on_delete=models.PROTECT)
    imagen = models.ImageField(upload_to="productos", null=True)

    def __str__(self):
        return self.nombre