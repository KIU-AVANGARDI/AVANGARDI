from . import price_calculator_views
from . import filter_diferentiating_views
from django.urls import path


urlpatterns = [
    path('standard-decor',price_calculator_views.ns_price_standard_decor,name="NSPriceStandardDecor"),
    path('standard-decor-filters',filter_diferentiating_views.ns_price_standard_decor_filters,name="NSPriceStandardDecorFilters"),
]