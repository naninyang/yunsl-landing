import styled from '@emotion/styled'
import { mq } from './designSystem'

export const Contents = styled.div(({ isRight }) => ({
  display: 'flex',
  [mq.maxTablet]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  [mq.minXsmall]: {
    flexDirection: isRight ? 'row-reverse' : null,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: isRight ? 'right' : null,
    width: '100%',
  },
  '& > div': {
    [mq.minXsmall]: {
      alignItems: isRight ? 'flex-end' : 'flex-start',
    },
  },
}))
