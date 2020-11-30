import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import type { FC } from 'react'
import { RoutesProvider } from '~/components/routes'
import '../styles.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <RoutesProvider>
        <Component {...pageProps} />
      </RoutesProvider>
    </ChakraProvider>
  )
}

export default App
