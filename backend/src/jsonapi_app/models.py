import reprlib
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return f"Category(name={self.name!r})"


class Article(models.Model):
    title = models.CharField(max_length=256)
    content = models.TextField()
    author = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    categories = models.ManyToManyField(Category, blank=True, null=True)

    def __str__(self):
        return f"Article(id={self.id!r}, title={reprlib.repr(self.title)!r}, ...)"
