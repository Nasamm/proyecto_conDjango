from django import forms
from .models import Producto
from captcha.fields import ReCaptchaField
from captcha.widgets import ReCaptchaV2Checkbox

class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = "__all__"

class LoginForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput)
    captcha = ReCaptchaField(widget=ReCaptchaV2Checkbox)