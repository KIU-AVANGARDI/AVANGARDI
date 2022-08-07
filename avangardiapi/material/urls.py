from . import views
from django.urls import path


urlpatterns = [
    path('material',views.MaterialView.as_view(),name="materialList"),
    path('material/search',views.SearchMaterialView.as_view(),name="materialSearch"),
    path('material/<int:pk>',views.MaterialView.as_view(),name="materialDetails"),
]