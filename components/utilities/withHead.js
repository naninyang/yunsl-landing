import Head from 'next/head'
import { useTranslation } from 'react-i18next'

const withHead = (Component) => {
  const App = props => {
    const { i18n } = useTranslation('common')

    if (i18n.language === 'ko') {
      var local = 'ko_KR'
      var title = '우물셈 윤슬 플랜'
      var description = '샘물터가 만든 지하수앱'
      var siteName = '우물셈 윤슬 플랜'
    } else {
      var local = 'en_US'
      var title = 'Woomulsem Yunsl plan'
      var description = 'Saemmulter MAKE Groundwater App.'
      var siteName = 'Woomulsem Yunsl plan'
    }

    const domain = `https://yunsl.saemmulter.com/`
    const currentUrl = `${domain}${i18n.language}/`

    return (
      <>
        <Head>
          <link rel='alternate' hrefLang='en-us' href={`${domain}en/`} />
          <link rel='alternate' hrefLang='ko-kr' href={`${domain}ko/`} />
          <link rel='canonical' href={currentUrl} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
          <title>{title} - {description}</title>
          <meta name='description' content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />
          <meta property='og:url' content={currentUrl} />
          <meta property='og:locale' content={local} />
          <meta property='og:image' content={`${domain}${i18n.language}-saemmulter-og-image.png?${(Math.random() * 7).toString(7)}`} />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content={siteName} />
        </Head>
        <Component {...props} />
      </>
    );
  };

  return App

};

export default withHead
