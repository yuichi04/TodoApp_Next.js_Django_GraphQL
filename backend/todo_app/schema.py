import graphene
from graphene_django import DjangoObjectType
from todo_app.models import Task


class TaskType(DjangoObjectType):
    class Meta:
        model = Task
        fields = "__all__"


class RootQuery(graphene.ObjectType):
    """
    全てのクエリをまとめるためのGraphQLオブジェクトタイプ
    """

    # 全てのタスクを取得するためのクエリ
    all_tasks = graphene.List(TaskType, description="全てのタスクを取得する")

    # 特定のタスクを取得するためのクエリ
    task = graphene.Field(TaskType, description="特定のタスクを取得する", id=graphene.Int())

    def resolve_all_tasks(self, info):
        return Task.objects.all()

    def resolve_task(self, info, id):
        return Task.objects.get(pk=id)


# 新しいタスクを作成するためのGraphQLミューテーション
class CreateTaskMutation(graphene.Mutation):
    # TaskTypeの戻り値の型を定義
    task = graphene.Field(TaskType)

    # 引数の設定
    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String()
        completed = graphene.Boolean()

    # 新しいタスクを作成してデータベースに保存する
    def mutate(self, info, title, description=None, completed=False):
        # タスクをデータベースに保存し、その内容を変数に格納
        task = Task.objects.create(
            title=title, description=description, completed=completed
        )
        # 新しく作成されたタスクのデータを含むミューテーションの結果をクライアントに返す
        return CreateTaskMutation(task=task)


# 既存のタスクを更新するためのGraphQLミューテーション
class UpdateTaskMutation(graphene.Mutation):
    # TaskTypeの戻り値の型を定義
    task = graphene.Field(TaskType)

    # 引数の設定
    class Arguments:
        id = graphene.ID(required=True)
        # 更新時に必須項目にしない項目はオプションにする
        title = graphene.String()
        description = graphene.String()
        completed = graphene.Boolean()

    # 既存のタスクを更新してデータベースに保存する
    # オプションの引数にはNoneを設定する
    def mutate(self, info, id, title=None, description=None, completed=None):
        # データベースからidと一致するpkを持つタスクを取得
        task = Task.objects.get(pk=id)
        if title:
            task.title = title
        if description:
            task.description = description
        if completed is not None:
            task.completed = completed
        # データベースのタスクを更新
        task.save()
        # 更新されたタスクのデータを含むミューテーションの結果をクライアントに返す
        return UpdateTaskMutation(task=task)


# タスクを削除するためのGraphQLミューテーション
class DeleteTaskMutation(graphene.Mutation):
    # タスクの削除が成功したかどうかをクライアントに伝えるためのフラグを設定
    ok = graphene.Boolean()

    class Arguments:
        id = graphene.ID(required=True)

    # 既存のタスクをデータベースから削除する
    def mutate(self, info, id):
        # データベースからidと一致するpkを持つタスクを取得
        task = Task.objects.get(pk=id)
        # データベースからタスクを削除
        task.delete()
        return DeleteTaskMutation(ok=True)


# 全てのミューテーションをまとめるためのGraphQLオブジェクトタイプ
class RootMutation(graphene.ObjectType):
    """
    全てのミューテーションをまとめるためのGraphQLオブジェクトタイプ
    """

    create_task = CreateTaskMutation.Field()
    update_task = UpdateTaskMutation.Field()
    delete_task = DeleteTaskMutation.Field()


# スキーマの定義: クエリとミューテーションを含むGraphQLスキーマ
schema = graphene.Schema(query=RootQuery, mutation=RootMutation)
