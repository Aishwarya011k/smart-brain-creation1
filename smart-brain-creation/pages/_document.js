import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Smart Brain Creations - Creative & Digital Education</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Smart Brain Creations - Creative & Digital Education for Future-Ready Students. Empowering young minds through innovative learning experiences." />
          <meta name="keywords" content="creative education, digital learning, future-ready students, online courses, innovative learning" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.smartbraincreations.com/" />
          <meta property="og:title" content="Smart Brain Creations - Creative & Digital Education" />
          <meta property="og:description" content="Creative & Digital Education for Future-Ready Students. Empowering young minds through innovative learning experiences." />
          <meta property="og:image" content="https://www.smartbraincreations.com/logo.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="400" />
          <meta property="og:site_name" content="Smart Brain Creations" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://www.smartbraincreations.com/" />
          <meta name="twitter:title" content="Smart Brain Creations - Creative & Digital Education" />
          <meta name="twitter:description" content="Creative & Digital Education for Future-Ready Students. Empowering young minds through innovative learning experiences." />
          <meta name="twitter:image" content="https://www.smartbraincreations.com/logo.png" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://www.smartbraincreations.com/" />
          
          {/* Favicon and App Icons */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="192x192" href="/logo192.png" />
          <link rel="apple-touch-icon" href="/logo512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#5f117c" />
          
          {/* JSON-LD Structured Data for Organization */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                'name': 'Smart Brain Creations',
                'url': 'https://www.smartbraincreations.com',
                'logo': 'https://www.smartbraincreations.com/logo.png',
                'description': 'Creative & Digital Education for Future-Ready Students',
                'sameAs': [
                  'https://www.facebook.com/smartbraincreations',
                  'https://www.instagram.com/smartbraincreations',
                  'https://www.youtube.com/smartbraincreations'
                ],
                'address': {
                  '@type': 'PostalAddress',
                  'addressLocality': 'Bangalore',
                  'addressRegion': 'Karnataka',
                  'addressCountry': 'IN'
                }
              })
            }}
          />
          
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4955812720478714" crossorigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument