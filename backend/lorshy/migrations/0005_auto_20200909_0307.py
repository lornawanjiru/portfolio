# Generated by Django 3.1.1 on 2020-09-09 03:07

from django.db import migrations
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('lorshy', '0004_auto_20200909_0256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='Phone',
            field=phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None),
        ),
    ]
