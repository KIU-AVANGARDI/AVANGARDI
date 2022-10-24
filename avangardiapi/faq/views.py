from django.core.paginator import Paginator
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Faq
from . import serializers

class FaqView(APIView):
    def get(self, request, pk=None):
        if pk:
            try:
                data = Faq.objects.get(id=pk)
                serializer = serializers.FaqSerializer(data, context={"request": request}, many=False)
                return Response(serializer.data)

            except:
                return Response("FAQS was not found")

        data = Faq.objects.all().order_by('id')
        if "page" in request.GET:
            page = request.GET['page']
            paginator = Paginator(data, 25)
            page_obj = paginator.get_page(page)
            serializer = serializers.FaqSerializer(page_obj, context={"request": request}, many=True)
            return Response(serializer.data)
        else:
            serializer = serializers.FaqSerializer(data, context={"request": request}, many=True)
            return Response(serializer.data)
