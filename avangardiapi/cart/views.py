from django_rest.http import status
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Cart
from . import serializers


class CartView(generics.ListAPIView):
    serializer_class = serializers.CartSerializer
    queryset = Cart.objects.all()
    def get_queryset(self):
        user_id = self.request.query_params.get("user")
        if user_id:
            try:
                queryset = super().get_queryset()
                queryset = list(queryset)
                queryset = filter(lambda x: x.user_id == int(user_id), list(queryset))
                # serializer = serializers.CartSerializer(queryset, context={"request": self.request}, many=False)
                return queryset
            except:
                pass

        queryset = super().get_queryset()
        # serializer = serializers.CartSerializer(data, context={"request": self.request}, many=True)
        return queryset


class AddCartView(APIView):
    def post(self, request):
        serializer = serializers.CartSerializer(data=request.data)
        permission_classes = [permissions.IsAuthenticated]
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
