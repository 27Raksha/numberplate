# Generated by Django 5.0.2 on 2024-03-09 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=255)),
                ('adharcard', models.CharField(max_length=12, unique=True)),
                ('age', models.PositiveIntegerField()),
                ('phone', models.CharField(max_length=15)),
            ],
            options={
                'db_table': 'CustomUser',
            },
        ),
    ]
