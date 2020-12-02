import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import type { FC } from 'react'
import { BoardProvider } from '~/components/contexts/board'
import { RoutesProvider } from '~/components/contexts/routes'
import { TurnProvider } from '~/components/contexts/turn'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <BoardProvider>
        <RoutesProvider>
          <TurnProvider>
            <Component {...pageProps} />
          </TurnProvider>
        </RoutesProvider>
      </BoardProvider>
    </ChakraProvider>
  )
}

export default App
