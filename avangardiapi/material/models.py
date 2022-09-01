from django.db import models

class Material(models.Model):
    name = models.CharField(null=False,max_length=255,unique=False)
    height = models.FloatField(null=False, default=0)
    width = models.FloatField(null=False, default=0)
    length = models.FloatField(null=False, default=0)
    price_square_meter = models.FloatField(null = False, default=0)
    price_05 = models.FloatField(null=False, default=0)
    price_100_60 = models.FloatField(null=False, default=0)
    price_worktop_profile = models.FloatField(null=False, default=0)
    material = models.CharField(null=False, default='Material', max_length=50)
    note_ge = models.TextField(null=True, blank=True)
    note_en = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='images/', null=True, default = "media/default-product.jpeg")
    image2 = models.ImageField(upload_to='images/', null=True, default = "media/default-product.jpeg")
    image3 = models.ImageField(upload_to='images/', null=True, default = "media/default-product.jpeg")
    image4 = models.ImageField(upload_to='images/', null=True, default = "media/default-product.jpeg")

    STANDARD = 'STANDARD'
    STANDARDPLUS = 'STANDARD PLUS'
    SOLIDDECORATIVELAMINATE="SOLID DECORATIVE LAMINATE"
    WORKTOPS="WORKTOPS"
    WOODWORKTOPS="WOOD WORKTOPS"
    COMPACTLAMINATEWORKTOPS="COMPACT LAMINATE WORKTOPS"
    SOLIDACRYLICWORKTOPS="SOLID ACRYLIC WORKTOPS"

    MATERIAL_CATEGORY_CHOICES = [
        (STANDARD, 'Standard'),
        (STANDARDPLUS, 'StandardPlus'),
        (SOLIDDECORATIVELAMINATE, "SOLID DECORATIVE LAMINATE"),
        (WORKTOPS, "WORKTOPS"),
        (WOODWORKTOPS, "WOOD WORKTOPS"),
        (COMPACTLAMINATEWORKTOPS, "COMPACT LAMINATE WORKTOPS"),
        (SOLIDACRYLICWORKTOPS, "SOLID ACRYLIC WORKTOPS"),

    ]
    category = models.CharField(
        max_length=50,
        choices=MATERIAL_CATEGORY_CHOICES,
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name