from abc import ABC

from rest_framework import serializers
from .models import CustomUser


class RegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)

    class Meta:
        model = CustomUser
        fields = ['email', 'password', 'password2','firstName','profilePicture']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self):
        user = CustomUser(
            email=self.validated_data['email'],
            firstName=self.validated_data['firstName'],
            profilePicture=self.validated_data['profilePicture']
                          )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match.'})
        user.set_password(password)
        user.save()
        return user


class PasswordChangeSerializer(serializers.Serializer):
    current_password = serializers.CharField(style={"input_type": "password"}, required=True)
    new_password = serializers.CharField(style={"input_type": "password"}, required=True)

    def validate_current_password(self, value):
        if not self.context['request'].user.check_password(value):
            raise serializers.ValidationError({'current_password': 'Does not match'})
        return value


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)