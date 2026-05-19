import Head from 'next/head';
import Layout from '../components/Layout';
import Home from '../components/pages/Home/Home';

export default function Index() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Smart Brain Creations',
              url: 'https://www.smartbraincreations.com',
              logo: 'https://www.smartbraincreations.com/logo.png',
              sameAs: [
                'https://www.facebook.com/smartbraincreations',
                'https://www.instagram.com/smartbraincreations',
                'https://www.youtube.com/smartbraincreations'
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Smart Brain Creations',
              url: 'https://www.smartbraincreations.com'
            })
          }}
        />
      </Head>
      <Layout pathname="/">
        <Home />
      </Layout>
    </>
  );
}