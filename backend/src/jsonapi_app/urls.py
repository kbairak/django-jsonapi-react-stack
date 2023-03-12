from .views import ArticleResource


urlpatterns = [
    *ArticleResource.as_views(),
]
