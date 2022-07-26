import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled'
import styles from '../../styles/Footer.module.sass'
import { colors, mixin, mq, Rem, Vw } from '../../styles/designSystem'
import LinkButton from '../utilities/linkButton'
import { images } from '../../images'

const Container = styled.footer({
  backgroundColor: colors.important,
})

const Contents = styled.div({
  ...mixin.widthSettings,
  [mq.maxTablet]: {
    padding: `${Vw(25, 320)} ${Rem(25)}`,
  },
  [mq.minXsmall]: {
    padding: `${Vw(50, 1280)} ${Rem(25)}`,
  },
  [mq.minLarge]: {
    padding: `${Rem(50)} ${Rem(25)}`,
  },
})

const Company = styled.div({
  '& a': {
    display: 'inline-block',
  },
})

const Svg = styled.i({
  display: 'block',
  width: Rem(72),
  height: Rem(25),
  background: `url(${images.saemmulter}) no-repeat 50% 50%/contain`,
  [mq.minXsmall]: {
    width: Rem(144),
    height: Rem(50),
  },
})

function Footer() {
  const { t, i18n } = useTranslation('common')

  return (
    <Container>
      <Contents>
        <Company>
          <LinkButton href='https://saemmulter.com/'><Svg /></LinkButton>
        </Company>
        <div className={styles['footer']}>
          <p>cgwaterlb@gmail.com</p>
          <p>+82-10-7413-1102</p>
          <p>사업자등록번호 511-81-26566</p>
          <address>대전광역시 서구 대덕대로 239 소셜캠퍼스온 403호 주식회사 샘물터</address>
          <strong>© Saemmulter Inc.</strong>
        </div>
      </Contents>
    </Container>
  )
}

export default Footer
