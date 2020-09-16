# Generated by Django 3.1.1 on 2020-09-16 01:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lorshy', '0006_blog'),
    ]

    operations = [
        migrations.CreateModel(
            name='Aboutme',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Image', models.ImageField(upload_to='pics')),
            ],
        ),
        migrations.CreateModel(
            name='portfcyb',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=200)),
                ('Category', models.CharField(max_length=50)),
                ('Image', models.ImageField(upload_to='pics')),
            ],
        ),
        migrations.CreateModel(
            name='portfnet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=200)),
                ('Category', models.CharField(max_length=50)),
                ('Image', models.ImageField(upload_to='pics')),
            ],
        ),
        migrations.CreateModel(
            name='portfweb',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=200)),
                ('Category', models.CharField(max_length=50)),
                ('Image', models.ImageField(upload_to='pics')),
            ],
        ),
    ]