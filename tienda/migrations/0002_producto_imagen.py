# Generated by Django 4.1.2 on 2023-07-01 06:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='imagen',
            field=models.ImageField(null=True, upload_to='productos'),
        ),
    ]