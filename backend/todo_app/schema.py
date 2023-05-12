import graphene
from graphene_django import DjangoObjectType
from todo_app.models import Task
from .common import CreateTaskInput, UpdateTaskInput


class TaskType(DjangoObjectType):
    """
    Taskモデルの全てのフィールドが含まれたGraphQLタイプ
    """

    class Meta:
        model = Task
        fields = "__all__"


class RootQuery(graphene.ObjectType):
    """
    全てのクエリをまとめるためのGraphQLオブジェクトタイプ
    """

    all_tasks = graphene.List(TaskType, description="タスクの一覧を取得するフィールド")
    task = graphene.Field(TaskType, description="特定のタスクを取得するフィールド", id=graphene.Int())

    # all_tasksフィールドのリゾルバ
    def resolve_all_tasks(self, info):
        # リクエストからユーザー情報を取得
        # user = info.context.user
        # ユーザーが認証されていない場合、例外を投げる
        # if not user.is_authenticated:
        # raise Exception("タスクの一覧を取得するにはユーザー認証が必要です。")
        # 認証されたユーザーのタスクをフィルタリングして返す
        # return Task.objects.filter(user=user)
        return Task.objects.all()

    # taskフィールドのリゾルバ
    def resolve_task(self, info, id):
        # リクエストからユーザー情報を取得
        user = info.context.user
        # ユーザーが認証されていない場合、例外を投げる
        if not user.is_authenticated:
            raise Exception("タスクを取得するにはユーザー認証が必要です。")

        # タスクを取得する
        try:
            # 与えられたIDと認証されたユーザーに基づいてタスクを取得
            task = Task.objects.get(pk=id, user=user)
        # タスクが存在しない場合、例外を投げる
        except Task.DoesNotExist:
            raise Exception("タスクが見つかりません。")

        # タスクを返す
        return task


class CreateTask(graphene.Mutation):
    """
    新しいタスクを作成するためのGraphQLミューテーション
    """

    # TaskTypeの戻り値の型を定義
    task = graphene.Field(TaskType)

    # 引数の設定
    class Arguments:
        input = CreateTaskInput(required=True)

    # 新しいタスクを作成してデータベースに保存する
    def mutate(self, info, input):
        # タスクをデータベースに保存し、その内容を変数に格納
        task = Task.objects.create(
            title=input.title, description=input.description, completed=input.completed
        )
        # 新しく作成されたタスクのデータを含むミューテーションの結果をクライアントに返す
        return CreateTask(task=task)


class UpdateTask(graphene.Mutation):
    """
    既存のタスクを更新するためのGraphQLミューテーション
    """

    # 更新されたタスクを返すためのフィールド
    task = graphene.Field(TaskType)

    # 引数の設定
    class Arguments:
        input = UpdateTaskInput(required=True)

    # 既存のタスクを更新してデータベースに保存
    # オプションの引数にはNoneを設定
    def mutate(self, info, input):
        user = info.context.user  # リクエストからユーザー情報を取得
        if not user.id_authenticated:  # ユーザーが認証されていない場合、例外を投げる
            raise Exception("タスクを更新するにはユーザー認証が必要です。")
        try:
            # IDとユーザーに基づいてタスクを取得
            task = Task.objects.get(pk=id, user=user)
        # タスクが存在しない場合、例外を投げる
        except Task.DoesNotExist:
            raise Exception("タスクが見つかりません。")

        # 入力引数に応じてタスクのプロパティを更新
        if input.title:
            task.title = input.title
        if input.description:
            task.description = input.description
        if input.completed is not None:
            task.completed = input.completed

        # タスクの変更をデータベースに保存
        task.save()

        # 更新されたタスクのデータを含むミューテーションの結果をクライアントに返す
        return UpdateTask(task=task)


class DeleteTask(graphene.Mutation):
    """
    タスクを削除するためのGraphQLミューテーション
    """

    # タスクの削除が成功したかどうかをクライアントに伝えるためのフラグを設定
    ok = graphene.Boolean()

    class Arguments:
        id = graphene.ID(required=True)

    # 既存のタスクをデータベースから削除する
    def mutate(self, info, id):
        user = info.context.user

        if not user.is_authenticated:
            raise Exception("タスクを削除するにはユーザー認証が必要です。")
        try:
            task = Task.objects.get(pk=id, user=user)
        except Task.DoesNotExist:
            raise Exception("タスクが見つかりません。")

        # データベースからタスクを削除
        task.delete()

        # タスクが正常に削除されたことをTrueとしてクライアントに返す
        return DeleteTask(ok=True)


class RootMutation(graphene.ObjectType):
    """
    全てのミューテーションをまとめるためのGraphQLオブジェクトタイプ
    """

    create_task = CreateTask.Field()
    update_task = UpdateTask.Field()
    delete_task = DeleteTask.Field()


# スキーマの定義: クエリとミューテーションを含むGraphQLスキーマ
schema = graphene.Schema(query=RootQuery, mutation=RootMutation)
