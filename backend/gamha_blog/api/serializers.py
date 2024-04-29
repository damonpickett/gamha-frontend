from rest_framework import serializers
from .models import Post, Book

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'subtitle', 'content', 'blurb', 'originally_published', 'last_updated', 'post_cover']

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'cover_image', 'amazon_link', 'order']
