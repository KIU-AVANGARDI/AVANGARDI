from . import views
from django.urls import path


urlpatterns = [
    path('blog',views.BlogView.as_view(),name="blogList"),
    ]