import Layout from '../components/Layout';

export default function PrivacyPage() {
  return (
    <Layout pathname="/privacy">
      <div className="policy-page" style={{padding: '2rem', maxWidth: '1100px', margin: '0 auto', color: '#2f2f2f'}}>
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> 25th March, 2026</p>

        <p>Smart Brain Creations (“we”, “our”, or “us”) is committed to protecting the privacy of our website visitors, clients, and partners. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website: <a href="https://www.smartbraincreations.com" target="_blank" rel="noreferrer">www.smartbraincreations.com</a>.</p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information</strong>: Name, email address, phone number, institution name, and other details provided through contact forms or inquiries.</li>
          <li><strong>Usage Data</strong>: Information about how you interact with our website, including IP address, browser type, pages visited, and time spent.</li>
          <li><strong>Communication Data</strong>: Any information you provide when contacting us via email, forms, or phone.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Respond to inquiries and provide information about our services</li>
          <li>Schedule meetings or demos with institutions</li>
          <li>Improve our website and user experience</li>
          <li>Communicate updates, offerings, or relevant information</li>
          <li>Maintain internal records and analytics</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share information only:</p>
        <ul>
          <li>With trusted service providers assisting in operations (under confidentiality)</li>
          <li>When required by law or legal obligations</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, misuse, or disclosure. However, no online transmission is completely secure, and we cannot guarantee absolute security.</p>

        <h2>5. Cookies and Tracking</h2>
        <p>Our website may use cookies and similar technologies to enhance user experience and analyze website traffic. You can choose to disable cookies through your browser settings.</p>

        <h2>6. Third-Party Links</h2>
        <p>Our website may contain links to external websites. We are not responsible for the privacy practices or content of such third-party sites.</p>

        <h2>7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent for communication at any time</li>
        </ul>
        <p>To exercise these rights, please contact us.</p>

        <h2>8. Updates to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions or concerns regarding this Privacy Policy, please contact us:</p>
        <p>
          Smart Brain Creations<br />
          📞 +91 78929 00762<br />
          ✉️ info@smartbraincreations.com<br />
          🌐 www.smartbraincreations.com<br />
          📍 Bangalore, India
        </p>
      </div>
    </Layout>
  );
}
