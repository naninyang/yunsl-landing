import styled from '@emotion/styled'
import { mixin, mq } from './designSystem'

export const Contents = styled.div(({ isRight }) => ({
  display: 'flex',
  ...mixin.widthSettings,
  [mq.maxTablet]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  [mq.minXsmall]: {
    flexDirection: isRight ? 'row-reverse' : null,
    textAlign: isRight ? 'right' : null,
  },
}))
