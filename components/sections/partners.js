import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import styled from '@emotion/styled'
import styles from '../../styles/Partners.module.sass'
import { Contents } from '../../styles/common'
import { colors } from '../../styles/designSystem'
import { images } from '../../images'

const Container = styled.section({
  backgroundColor: colors.white,
  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

const Company = styled.em({
  '&::before': {
    background: `url(${images.company}) no-repeat 50% 50%/contain`,
  },
})

const Img = styled.img({
  width: '100%',
  height: 'auto',
})

function Partners() {
  const { t, i18n } = useTranslation('common')

  return (
    <Container>
      <Contents>
        <div className={styles['contents']}>
          <div className={styles['headline']}>
            <h2>
              <span>우물셈은 지하수위에 진심인</span>
              <Company><i>샘물터</i></Company>에서 만듭니다
            </h2>
            <p>
              전문가 집단과 협업을 하여
              <span>최고의 제품을 만들기 위해 고민합니다</span>
            </p>
          </div>
          <div className={styles['description']}>
            <picture>
              <source srcSet={`/logos.webp?${uuidv4()}`} type="image/webp" />
              <Img src={`/logos.png?${uuidv4()}`} alt='' />
            </picture>
          </div>
        </div>
        <picture>
          <source srcSet={`/partners.webp?${uuidv4()}`} type="image/webp" />
          <Img src={`/partners.png?${uuidv4()}`} alt='' />
        </picture>
      </Contents>
    </Container>
  )
}

export default Partners
