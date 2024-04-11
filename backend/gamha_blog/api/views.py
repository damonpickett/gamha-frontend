from rest_framework import viewsets
from .models import Post, Book
from .serializers import PostSerializer, BookSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all().order_by('order')
    serializer_class = BookSerializer