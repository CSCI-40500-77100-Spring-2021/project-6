# Generated by Django 3.1.7 on 2021-03-01 01:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('maven', '0002_auto_20210301_0109'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='email',
        ),
    ]
