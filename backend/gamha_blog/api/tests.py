from django.test import TestCase
from rest_framework.test import APIClient
from .models import Post

class PostAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        Post.objects.create(title='Test Post', subtitle='Test', content='Test content')

    def test_list_posts(self):
        response = self.client.get('/api/posts/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['title'], 'Test Post')