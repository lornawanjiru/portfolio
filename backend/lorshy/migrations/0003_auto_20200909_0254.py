# Generated by Django 3.1.1 on 2020-09-09 02:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lorshy', '0002_auto_20200909_0245'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='Desc',
            field=models.TextField(),
        ),
    ]
