# Generated by Django 4.0.5 on 2022-10-24 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_alter_blog_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='image',
            field=models.ImageField(default='default-blog.jpeg', null=True, upload_to='images/'),
        ),
    ]