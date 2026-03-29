import Layout from '../components/Layout';
import Home from '../components/pages/Home/Home';

export default function Index() {
  return (
    <Layout pathname="/">
      <Home />
    </Layout>
  );
}