from django.db import models


class Kitchen(models.Model):
    name = models.CharField(null=False,max_length=255,unique=False)
    height = models.FloatField(null=False, default=0)
    width = models.FloatField(null=False, default=0)
    length = models.FloatField(null=False, default=0)
    price = models.FloatField(null = False, default=0)
    price_worktop_profile = models.FloatField(null=True, default=0)
    material = models.CharField(null=False, default='Material', max_length=50)
    note_ge = models.TextField(null=True, blank=True)
    note_en = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='images/', null=True, default = "media/default-product.jpeg")
    image2 = models.ImageField(upload_to='images/', null=True, default = "media/default-product.jpeg")
    image3 = models.ImageField(upload_to='images/', null=True, default = "media/default-product.jpeg")
    image4 = models.ImageField(upload_to='images/', null=True, default = "media/default-product.jpeg")

    SINK = 'SINK'
    MIXER = 'MIXER'

    KITCHEN_CATEGORY_CHOICES = [
        (SINK, 'Sink'),
        (MIXER, 'Mixer'),

    ]
    category = models.CharField(
        max_length=10,
        choices=KITCHEN_CATEGORY_CHOICES,
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name
