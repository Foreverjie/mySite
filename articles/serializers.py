from rest_framework import serializers
from articles.models import Article
from django.contrib.auth.models import User
from django.db import models


class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class ArticleSerializer(serializers.ModelSerializer):
    owner = OwnerSerializer(read_only=True)

    class Meta:
        model = Article
        fields = ('id', 'title', 'description',
                  'article', 'created_at', 'owner')
