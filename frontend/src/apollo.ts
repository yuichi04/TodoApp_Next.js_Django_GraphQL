import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// CSRF トークンを取得するための関数
const getCsrfToken = (): string | undefined => {
  if (typeof document === 'undefined') return undefined
  const csrfTokenRow = document.cookie
    .split('; ')
    .find((row) => row.startsWith('csrftoken='))
  return csrfTokenRow ? csrfTokenRow.split('=')[1] : undefined
}

// CSRF トークンを取得
const csrfToken = getCsrfToken()

// GraphQL エンドポイントへのリンクを設定
const httpLink = new HttpLink({
  uri: 'http://localhost:8000/graphql/',
})

// authLink を使用して、各リクエストのヘッダーにCSRFトークンを追加
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'X-CSRFToken': csrfToken,
    },
  }
})

// ApolloClient インスタンスを作成し、authLink と httpLink を組み合わせてリンクを設定
// キャッシュとして InMemoryCache を使用
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
