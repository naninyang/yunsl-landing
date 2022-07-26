import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import { useMediaQuery } from 'react-responsive'
import styled from '@emotion/styled'
import styles from '../../styles/Reason.module.sass'
import { Contents } from '../../styles/common'
import { colors } from '../../styles/designSystem'

const Container = styled.section({
  backgroundColor: colors.default,
  color: colors.white,
})

const Img = styled.img({
  width: '100%',
  height: 'auto',
})

function Reason({ isRight }) {
  const { t, i18n } = useTranslation('common')
  const isMobile = useMediaQuery({
    query: "(max-width: 48rem)",
  });

  return (
    <Container>
      <Contents isRight={true}>
        <div className={styles['contents']}>
          <div className={styles['headline']}>
            <h2>
              우물셈 ‘윤슬’ 플랜이
              <span>왜 필요할까요?</span>
            </h2>
          </div>
          <div className={styles['description']}>
            <p>
              <strong>지속 가능한 수자원 확보에 필수</strong>인
              <span>내 발 밑의 안전을 보여주는</span>
              <strong>지하수 모니터링.</strong>
              <span>보이지 않는 <strong>깨끗한 지하수를</strong></span>
              <strong>데이터</strong>로 보여줍니다
            </p>
          </div>
        </div>
        <picture>
          {isMobile
            ? (
              <>
                <source srcSet={`/why.webp?${uuidv4()}`} type="image/webp" />
                <Img src={`/why.png?${uuidv4()}`} alt='' />
              </>
            )
            : (
              <>
                <source srcSet={`/reason.webp?${uuidv4()}`} type="image/webp" />
                <Img src={`/reason.png?${uuidv4()}`} alt='' />
              </>
            )
          }
        </picture>
      </Contents>
    </Container>
  )
}

export default Reason
