from graphene import Boolean, DateTime, String, ID, InputObjectType


class CreateTaskInput(InputObjectType):
    """
    新しいタスクを作成するための入力オブジェクト
    """

    # 入力フィールドの設定
    id = ID
    title = String(required=True)
    description = String()
    completed = Boolean()
    createdDate = DateTime()
