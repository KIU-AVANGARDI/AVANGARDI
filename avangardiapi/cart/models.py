from django.db import models


class Cart(models.Model):
    user_id = models.IntegerField()
    product_id = models.IntegerField()
    product_type = models.CharField(default="material", max_length=20)
    def __str__(self):
        return self.name