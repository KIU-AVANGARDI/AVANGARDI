# Generated by Django 4.0.5 on 2022-10-24 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='profilePicture',
            field=models.ImageField(default='default-profile.jpeg', null=True, upload_to='images/'),
        ),
    ]
