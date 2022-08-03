from . import views
from django.urls import path


urlpatterns = [
    path('items',views.CartView.as_view(),name="cartList"),
    path('add',views.AddCartView.as_view(),name="addCart"),
]