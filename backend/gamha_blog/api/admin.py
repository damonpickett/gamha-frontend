from django.contrib import admin
from .models import Post, Book

class PostAdmin(admin.ModelAdmin):
    list_display = ('title',)  # tuple of fields to display

class BookAdmin(admin.ModelAdmin):
    list_display = ('title',)  # tuple of fields to display

admin.site.register(Post, PostAdmin)
admin.site.register(Book, BookAdmin)