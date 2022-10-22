from . import views
from django.urls import path


urlpatterns = [
    path('faq',views.FaqView.as_view(),name="faqList"),
    ]