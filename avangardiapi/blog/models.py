from django.db import models

class Blog(models.Model):
    title_ge = models.CharField(null=False,max_length=255,unique=False, default="ბლოგი")
    title_en = models.CharField(null=False, max_length=255, unique=False, default="Blog")
    short_text_ge = models.TextField(null=False, max_length=1000, unique=False, default="მოკლე ტექსტი")
    short_text_en = models.TextField(null=False, max_length=1000, unique=False, default="Short Text")
    long_text_ge = models.TextField(null=False, max_length=10000, unique=False, default="გრძელი ტექსტი")
    long_text_en = models.TextField(null=False, max_length=10000, unique=False, default="Long Text")
    image = models.ImageField(upload_to='images/', null=True, default = "default-blog.png")


    def __str__(self):
        return self.title_ge