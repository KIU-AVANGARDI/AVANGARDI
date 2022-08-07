from . import views
from django.urls import path


urlpatterns = [
    path('kitchen',views.KitchenView.as_view(),name="kitchenList"),
    path('kitchen/search',views.SearchKitchenView.as_view(),name="kitchenSearch"),
    path('kitchen/<int:pk>',views.KitchenView.as_view(),name="kitchenDetails")
]