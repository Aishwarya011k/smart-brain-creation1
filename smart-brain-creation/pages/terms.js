import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout pathname="/terms">
      <div className="policy-page" style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto', color: '#2f2f2f' }}>
        <h1>Terms & Conditions</h1>
        <p><strong>Effective Date:</strong> 25th MARCH 2026</p>

        <p>Welcome to Smart Brain Creations. By accessing or using our website (<a href="https://www.smartbraincreations.com" target="_blank" rel="noreferrer">www.smartbraincreations.com</a>) and services, you agree to comply with and be bound by the following Terms and Conditions.</p>

        <h2>1. Use of Website</h2>
        <p>This website is intended to provide information about our services. By using this site, you agree to use it only for lawful purposes and in a manner that does not infringe the rights of others.</p>

        <h2>2. Services</h2>
        <p>Smart Brain Creations provides creative and digital education programs in collaboration with schools and institutions. All services are subject to mutual agreement, terms of engagement, and institutional approvals.</p>

        <h2>3. Intellectual Property</h2>
        <p>All content on this website, including text, graphics, logos, images, and materials, is the property of Smart Brain Creations and is protected by applicable intellectual property laws.</p>
        <p>You may not reproduce, distribute, or use any content without prior written permission.</p>

        <h2>4. User Information</h2>
        <p>Any information submitted through forms or communication channels must be accurate and complete. Misuse of contact forms or submission of false information may result in restricted access.</p>

        <h2>5. Limitation of Liability</h2>
        <p>Smart Brain Creations shall not be held liable for any direct, indirect, or incidental damages arising from the use of this website or reliance on the information provided.</p>

        <h2>6. Third-Party Links</h2>
        <p>Our website may include links to third-party websites. We are not responsible for the content, policies, or practices of such external sites.</p>

        <h2>7. Modifications</h2>
        <p>We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the website constitutes acceptance of the updated terms.</p>

        <h2>8. Governing Law</h2>
        <p>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in Bangalore, Karnataka.</p>

        <h2>9. Contact Information</h2>
        <p>If you have any questions regarding these Terms & Conditions, please contact us:</p>
        <p>
          Smart Brain Creations<br />
          📞 +91 78929 00762<br />
          ✉️ info@smartbraincreations.com<br />
          📍 Bangalore, India
        </p>
      </div>
    </Layout>
  );
}
