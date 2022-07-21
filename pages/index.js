import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import styles from '../styles/Home.module.css'

function Home() {
  const { i18n, t } = useTranslation('common')

  return (
    <>
      {t('test.blah')}
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Home
