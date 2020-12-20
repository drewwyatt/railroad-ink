import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import type { FC } from 'react'
import { BoardProvider } from '~/components/contexts/board'
import { RollProvider } from '~/components/contexts/roll'
import { SpecialsProvider } from '~/components/contexts/specials'
import { TurnProvider } from '~/components/contexts/turn'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <BoardProvider>
        <SpecialsProvider>
          <RollProvider>
            <TurnProvider>
              <Component {...pageProps} />
            </TurnProvider>
          </RollProvider>
        </SpecialsProvider>
      </BoardProvider>
    </ChakraProvider>
  )
}

export default App
