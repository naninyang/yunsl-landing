import styled from '@emotion/styled'
import { mixin, mq } from './designSystem'

export const Contents = styled.div({
  display: 'flex',
  ...mixin.widthSettings,
  [mq.maxTablet]: {
    flexDirection: 'column',
  },
})
