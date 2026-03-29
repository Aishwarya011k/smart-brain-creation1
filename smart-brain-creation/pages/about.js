import Layout from '../components/Layout';
import About from '../components/pages/About/About';

export default function AboutPage() {
  return (
    <Layout pathname="/about">
      <About />
    </Layout>
  );
}