# Generated by Django 3.1.7 on 2021-04-19 23:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('maven', '0006_books_genre'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='id',
        ),
        migrations.AddField(
            model_name='user',
            name='ID',
            field=models.UUIDField(default=True, editable=False, primary_key=True, serialize=False),
        ),
    ]
