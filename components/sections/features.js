import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import { useMediaQuery } from 'react-responsive'
import styled from '@emotion/styled'
import styles from '../../styles/Features.module.sass'
import { Contents } from '../../styles/common'
import { colors, Rem } from '../../styles/designSystem'

const Container = styled.section(({ isFirst }) => ({
  backgroundColor: colors.background,
  position: 'relative',
  color: colors.black,
  '&::before': {
    content: "''",
    display: isFirst ? null : 'block',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
    backgroundColor: colors.accent,
    width: `calc(100% - ${Rem(50)})`,
    height: Rem(2),
  },
}))

const Img = styled.img({
  width: '100%',
  height: 'auto',
})

function Features({ isRight }) {
  const { t, i18n } = useTranslation('common')
  const isMobile = useMediaQuery({
    query: "(max-width: 48rem)",
  });

  return (
    <>
      <Container isFirst={true}>
        <Contents>
          <div className={styles['contents']}>
            <div className={styles['headline']}>
              <h2>
                <strong>우물셈 ‘윤슬’ 플랜</strong>으로
                <span>좀 더 편하게</span>
              </h2>
            </div>
            <div className={styles['description']}>
              <p>
                <strong>지하수위</strong>와 관련된 데이터를
                <span><strong>한눈에 확인</strong>할 수 있어요!</span>
              </p>
            </div>
          </div>
          <picture>
            <source srcSet={`/feature-dashboard.webp?${uuidv4()}`} type="image/webp" />
            <Img src={`/feature-dashboard.png?${uuidv4()}`} alt='' />
          </picture>
        </Contents>
      </Container>
      <Container>
        <Contents isRight={true}>
          <div className={styles['contents']}>
            <div className={styles['headline']}>
              <h2>
                <strong>지하수위</strong>와 관련된
                <span><strong>날씨정보</strong> 확인</span>
              </h2>
            </div>
            <div className={styles['description']}>
              <p>
                <strong>지하수위</strong>와 관련된 날씨정보를
                <span><strong>다양한 방법</strong>으로 확인해 보세요!</span>
              </p>
            </div>
          </div>
          <picture>
            {isMobile
              ? (
                <>
                  <source srcSet={`/feature-items.webp?${uuidv4()}`} type="image/webp" />
                  <Img src={`/feature-items.png?${uuidv4()}`} alt='' />
                </>
              )
              : (
                <>
                  <source srcSet={`/feature-menu.webp?${uuidv4()}`} type="image/webp" />
                  <Img src={`/feature-menu.png?${uuidv4()}`} alt='' />
                </>
              )
            }
          </picture>
        </Contents>
      </Container>
      <Container>
        <Contents>
          <div className={styles['contents']}>
            <div className={styles['headline']}>
              <h2>
                <strong>전체 지도</strong>를 이용한
                <span>넓게 보는 <strong>데이터 그래프</strong></span>
              </h2>
            </div>
            <div className={styles['description']}>
              <p>
                좁은 지도가 아닌 <strong>전체 지도</strong>를 볼 수 있고
                <span>필요시 <strong>전체화면으로 그래프</strong>를</span>
                볼 수도 있습니다!
              </p>
            </div>
          </div>
          <picture>
            <source srcSet={`/feature-map.webp?${uuidv4()}`} type="image/webp" />
            <Img src={`/feature-map.png?${uuidv4()}`} alt='' />
          </picture>
        </Contents>
      </Container>
      <Container>
        <Contents isRight={true}>
          <div className={styles['contents']}>
            <div className={styles['headline']}>
              <h2>
                다양한 <strong>그래프 데이터</strong>를
                <span>한 화면에 위젯처럼 관리</span>
              </h2>
            </div>
            <div className={styles['description']}>
              <p>
                <strong>‘측정망 측정 그래프’</strong> 메뉴에서는
                <span>다양한 그래프 데이터를</span>
                <strong>추가하거나 삭제하는 기능</strong>을
                <span>사용하여 원하는 그래프 데이터를</span>
                볼 수 있어요!
              </p>
            </div>
          </div>
          <picture>
            <source srcSet={`/feature-graph.webp?${uuidv4()}`} type="image/webp" />
            <Img src={`/feature-graph.png?${uuidv4()}`} alt='' />
          </picture>
        </Contents>
      </Container>
      <Container>
        <Contents>
          <div className={styles['contents']}>
            <div className={styles['headline']}>
              <h2>
                큰 화면으로
                <span><strong>큰 글씨</strong>로 그래프 보기</span>
              </h2>
            </div>
            <div className={styles['description']}>
              <p>
                그래프를 <strong>큰 화면과 큰 글씨</strong>로
                <span>볼 수 있는 기능을 가지고 있어서</span>
                답답한 부분을 해소할 수 있어요!
              </p>
            </div>
          </div>
          <picture>
            <source srcSet={`/feature-large.webp?${uuidv4()}`} type="image/webp" />
            <Img src={`/feature-large.png?${uuidv4()}`} alt='' />
          </picture>
        </Contents>
      </Container>
    </>
  )
}

export default Features
