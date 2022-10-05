from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('material/',include('material.urls')),
    path('kitchen/', include('kitchen.urls')),
    path('auth/',include('account.urls')),
    path('cart/',include('cart.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns+=path(r'docs/', include_docs_urls(title='AVANGARDI API')),