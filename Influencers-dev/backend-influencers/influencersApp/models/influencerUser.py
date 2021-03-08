from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers


class InfluencerUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phoneNumber = models.TextField(max_length=15)
    birthdate = models.DateField()

    def __str__(self):
        return self.user.__str__()


class InfluencerUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InfluencerUser
        fields = ['id', 'user', 'phoneNumber', 'birthdate']
