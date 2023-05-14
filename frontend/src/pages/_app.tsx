import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import client from '@/apollo'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  )
}
