import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import type { FC } from 'react'
import '../styles.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
