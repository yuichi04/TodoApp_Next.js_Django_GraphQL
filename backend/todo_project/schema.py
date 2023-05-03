import graphene
from graphene_django import DjangoObjectType
from todo_app.models import Task


class YourModelType(DjangoObjectType):
    class Meta:
        model = Task


class Query(graphene.ObjectType):
    all_your_models = graphene.List(YourModelType)

    def resolve_all_your_models(root, info):
        return Task.objects.all()


schema = graphene.Schema(query=Query)
