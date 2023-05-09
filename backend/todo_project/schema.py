from graphene import Schema
from todo_app.graphql.queries import QueryRoot

schema = Schema(query=QueryRoot)
