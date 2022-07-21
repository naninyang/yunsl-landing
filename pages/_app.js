import { appWithTranslation } from 'next-i18next'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import '@fontsource/lato/900.css'
import '@fontsource/noto-sans-kr/korean-400.css'
import '@fontsource/noto-sans-kr/korean-700.css'
import '@fontsource/noto-sans-kr/korean-900.css'
import '../styles/globals.sass'

function SaemmulterApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(SaemmulterApp)
