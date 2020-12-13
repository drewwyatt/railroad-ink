import { AspectRatio, Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FC } from 'react'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'

type Props = {
  allocated: boolean
}

const Checked = styled(ImCheckboxChecked)`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 600px) {
    transform: translate(-100%, -100%);
  }
`

const Rolled: FC<Props> = ({ allocated, children }) => (
  <Box position="relative">
    <>
      <AspectRatio ratio={1}>{children}</AspectRatio>
      {allocated && <Checked />}
    </>
  </Box>
)

export default Rolled
