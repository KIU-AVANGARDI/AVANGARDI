from django.db import models


class Kitchen(models.Model):
    name_ge = models.CharField(null=False,max_length=255,unique=False, default="სამზარეულო")
    name_en = models.CharField(null=False, max_length=255, unique=False, default="Kitchen")
    height = models.FloatField(null=False, default=0)
    width = models.FloatField(null=False, default=0)
    length = models.FloatField(null=False, default=0)
    price = models.FloatField(null = False, default=0)
    price_worktop_profile = models.FloatField(null=True, default=0)
    material = models.CharField(null=False, default='Material', max_length=50)
    note_ge = models.TextField(null=True, blank=True)
    note_en = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='images/', null=True, default = "default-product.jpeg")
    image2 = models.ImageField(upload_to='images/', null=True, default = "default-product.jpeg")
    image3 = models.ImageField(upload_to='images/', null=True, default = "default-product.jpeg")
    image4 = models.ImageField(upload_to='images/', null=True, default = "default-product.jpeg")

    SINKS = 'SINKS'
    MIXERS = 'MIXERS'

    KITCHEN_CATEGORY_CHOICES = [
        (SINKS, 'Sinks'),
        (MIXERS, 'Mixers'),

    ]
    category = models.CharField(
        max_length=10,
        choices=KITCHEN_CATEGORY_CHOICES,
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name_ge
