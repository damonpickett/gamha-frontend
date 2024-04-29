from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, BookViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'books', BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
]