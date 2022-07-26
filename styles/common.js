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
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: isRight ? 'right' : null,
  },
  '& > div': {
    [mq.minXsmall]: {
      alignItems: isRight ? 'flex-end' : 'flex-start',
    },
  },
}))
