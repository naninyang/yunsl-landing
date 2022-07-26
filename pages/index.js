import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import Footer from '../components/layout/footer'
import Features from '../components/sections/features'
import Partners from '../components/sections/partners'
import Reason from '../components/sections/reason'
import Started from '../components/sections/started'

function Home() {
  const { i18n, t } = useTranslation('common')

  return (
    <>
      <Started />
      <Partners />
      <Reason />
      <Features />
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Home
