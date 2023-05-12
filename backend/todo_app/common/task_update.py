from graphene import Boolean, DateTime, String, ID, InputObjectType


class UpdateTaskInput(InputObjectType):
    """
    既存のタスクを更新するための入力オブジェクト
    """

    # 入力フィールドの設定
    id = ID(required=True)  # 更新するタスクのID（必須）
    title = String()  # タスクの新しいタイトル（オプション）
    description = String()  # タスクの新しい説明（オプション）
    completed = Boolean()  # タスクの完了状態（オプション）
