from django.db import models
from django.contrib.auth.models import User


class Article(models.Model):
    title = models.CharField(max_length=30, blank=False)
    description = models.CharField(max_length=100, blank=False)
    article = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="article", on_delete=models.CASCADE)
