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
          <p><a href='mailto:cgwaterlb@gmail.com'>cgwaterlb@gmail.com</a></p>
          <p><a href='tel:+82-10-7413-1102'>+82-10-7413-1102</a></p>
          <p>{t('footer.registration')}</p>
          <address>{t('footer.address')}</address>
          <strong>© Saemmulter Inc.</strong>
        </div>
      </Contents>
    </Container>
  )
}

export default Footer
