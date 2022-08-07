from . import views
from django.urls import path


urlpatterns = [
    path('products',views.KitchenView.as_view(),name="kitchenList"),
    path('products/search',views.SearchKitchenView.as_view(),name="kitchenSearch"),
    path('products/<int:pk>',views.KitchenView.as_view(),name="kitchenDetails")
]