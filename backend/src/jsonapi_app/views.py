from djsonapi import Resource

from .models import Article


class ArticleResource(Resource):
    TYPE = "articles"

    @classmethod
    def get_many(cls, request):
        return Article.objects.all()

    @classmethod
    def serialize(cls, obj):
        return {
            "id": str(obj.id),
            "attributes": {"title": obj.title, "content": obj.content},
        }
