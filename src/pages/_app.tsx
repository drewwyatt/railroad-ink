import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import type { FC } from 'react'
import { BoardProvider } from '~/components/contexts/board'
import { RoutesProvider } from '~/components/contexts/routes'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <BoardProvider>
        <RoutesProvider>
          <Component {...pageProps} />
        </RoutesProvider>
      </BoardProvider>
    </ChakraProvider>
  )
}

export default App
