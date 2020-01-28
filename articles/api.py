from articles.models import Article
from rest_framework import viewsets, permissions
from .serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ArticleSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
