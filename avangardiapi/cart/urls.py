from django.template.defaulttags import url

from . import views
from django.urls import path

urlpatterns = [
    path('items', views.CartView.as_view(), name="cartList"),
    path('add', views.AddCartView.as_view(), name="addCart"),
    path('delete/<int:pk>', views.DeleteCartView.as_view(), name="deleteCart"),
]