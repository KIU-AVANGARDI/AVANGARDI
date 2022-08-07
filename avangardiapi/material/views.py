from django.core.paginator import Paginator
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from . import serializers
from .models import Material


class MaterialView(APIView):
    def get(self, request, pk=None):
        if pk:
            try:
                data = Material.objects.get(id=pk)
                serializer = serializers.MaterialSerializer(data, context={"request": request}, many=False)
                return Response(serializer.data)

            except:
                return Response("Material was not found")

        data = Material.objects.all().order_by('id')
        if "page" in request.GET:
            page = request.GET['page']
            paginator = Paginator(data, 25)
            page_obj = paginator.get_page(page)
            serializer = serializers.MaterialSerializer(page_obj, context={"request": request}, many=True)
            return Response(serializer.data)
        else:
            serializer = serializers.MaterialSerializer(data, context={"request": request}, many=True)
            return Response(serializer.data)
        
        
class SearchMaterialView(generics.ListAPIView):
    serializer_class = serializers.MaterialSerializer
    queryset = Material.objects.all()
    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get("category")
        price_from = self.request.query_params.get("priceFrom")
        price_to = self.request.query_params.get("priceTo")
        kword = self.request.query_params.get("kword")
        queryset = list(queryset)
        if kword is not None:
            queryset = list(filter(lambda x: kword.lower() in x.name.lower(),queryset))
        if category is not None:
            categories = category.split('_')
            queryset = list(filter(lambda x: x.category in categories, queryset))
        if price_from is not None:
            try:
                price_from_decimal = float(price_from)
                queryset = list(filter(lambda x: x.price_square_meter >= price_from_decimal, queryset))
            except:
                pass
        if price_to is not None:
            try:
                price_to_decimal = float(price_to)
                queryset = list(filter(lambda x: x.price_square_meter <= price_to_decimal, queryset))
            except:
                pass
        return queryset
