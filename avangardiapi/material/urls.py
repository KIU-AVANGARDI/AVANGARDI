from . import views
from django.urls import path


urlpatterns = [
    path('products',views.MaterialView.as_view(),name="materialList"),
    path('products/search',views.SearchMaterialView.as_view(),name="materialSearch"),
    path('products/<int:pk>',views.MaterialView.as_view(),name="materialDetails"),
]