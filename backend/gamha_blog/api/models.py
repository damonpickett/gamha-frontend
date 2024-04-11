from django.db import models
from django_ckeditor_5.fields import CKEditor5Field

class Post(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True)
    content = CKEditor5Field('Text', config_name='extends')
    blurb = models.TextField(blank=True)
    originally_published = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['originally_published']

class Book(models.Model):
    title = models.CharField(max_length=200)
    cover_image = models.ImageField(upload_to='book_covers/')
    amazon_link = models.URLField(max_length=200)
    order = models.PositiveIntegerField(default=0, blank=False, null=False)

    class Meta:
        ordering = ['order']