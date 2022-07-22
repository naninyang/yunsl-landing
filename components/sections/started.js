import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import styled from '@emotion/styled'
import styles from '../../styles/Started.module.sass'
import { Contents } from '../../styles/common'
import { colors } from '../../styles/designSystem'
import LinkButton from '../utilities/linkButton'

const Container = styled.section({
  backgroundColor: colors.accent,
  position: 'relative',
  overflow: 'hidden',
})

const Img = styled.img({
  width: '100%',
  height: 'auto'
})

const LinkLanguage = styled(LinkButton)(({ isKorean }) => ({
  borderBottomColor: isKorean ? colors.important : 'transparent',
  fontWeight: isKorean ? 900 : 700,
  opacity: isKorean ? 1 : 0.7
}))

function Started() {
  const { t, i18n } = useTranslation('common')

  return (
    <Container>
      <Contents>
        <ul className={styles['i18n']}>
          <li>
            <LinkLanguage
              href={`/ko`}
              locale='ko'
              aria-label={i18n.language === 'ko' ? '한국어 선택 / Choose Korean' : 'Choose Korean / 한국어 선택'}
              isKorean={i18n.language === 'ko' ? true : false}
            >
              Ko
            </LinkLanguage>
          </li>
          <li>
            <LinkLanguage
              href={`/en`}
              locale='en'
              aria-label={i18n.language === 'ko' ? '영어 선택 / Choose English' : 'Choose English / 영어 선택'}
              isKorean={i18n.language === 'ko' ? false : true}
            >
              En
            </LinkLanguage>
          </li>
        </ul>
        <div className={styles['contents']}>
          <div className={styles['headline']}>
            <h1>{t('started.primary')}</h1>
            <p>
              {t('started.secondary1')}
              {' '}
              <span>{t('started.secondary2')}</span>
            </p>
          </div>
          <div className={styles['description']}>
            <p>
              우물셈의 윤슬 플랜은 클라우드를 통해 전세계 어디에서든
              {' '}
              <span>전세계의 지하수위와 강수량 데이터를 확인하거나</span>
              {' '}
              <span>자신이 거주중이거나 머물고 있는 지역의 데이터를</span>
              {' '}
              볼 수 있는 서비스입니다
            </p>
            <p>
              <small>
                <span>우물셈 SaaS를 이용 중이시라면 ‘윤슬’ 플랜에 통합하여</span>
                {' '}
                우물셈 SaaS 기능들을 그대로 사용 가능합니다
              </small>
            </p>
          </div>
        </div>
        <picture>
          <source srcSet={`/started.webp?${uuidv4()}`} type="image/webp" />
          <Img src={`/started.png?${uuidv4()}`} alt='' />
        </picture>
      </Contents>
    </Container>
  )
}

export default Started
