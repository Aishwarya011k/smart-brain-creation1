import Layout from '../components/Layout';
import Events from '../components/pages/Events/Events';

export default function EventsPage() {
  return (
    <Layout pathname="/events">
      <Events />
    </Layout>
  );
}