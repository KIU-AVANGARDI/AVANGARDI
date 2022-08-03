from django.db import models


class Cart(models.Model):
    user_id = models.IntegerField()
    product_id = models.IntegerField()

    def __str__(self):
        return self.name