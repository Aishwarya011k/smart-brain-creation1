import Layout from '../components/Layout';

export default function DisclaimerPage() {
  return (
    <Layout pathname="/disclaimer">
      <div className="policy-page" style={{padding: '2rem', maxWidth: '1100px', margin: '0 auto', color: '#2f2f2f'}}>
        <h1>Disclaimer</h1>
        <p><strong>Effective Date:</strong> 25th MARCH 2026</p>

        <p>The information provided on the Smart Brain Creations website (<a href="https://www.smartbraincreations.com" target="_blank" rel="noreferrer">www.smartbraincreations.com</a>) is for general informational purposes only.</p>

        <h2>1. No Professional Advice</h2>
        <p>The content on this website does not constitute professional, legal, or educational advice. Institutions and users are encouraged to evaluate our services independently before making decisions.</p>

        <h2>2. Accuracy of Information</h2>
        <p>While we strive to keep all information accurate and up to date, Smart Brain Creations makes no warranties or representations regarding the completeness, reliability, or accuracy of any information on the website.</p>

        <h2>3. Program Outcomes</h2>
        <p>Our programs are designed to enhance creativity, skills, and learning outcomes. However, individual results may vary depending on student participation, institutional implementation, and other external factors.</p>

        <h2>4. External Links Disclaimer</h2>
        <p>The website may contain links to third-party websites. Smart Brain Creations does not guarantee the accuracy or reliability of any information provided on these external platforms.</p>

        <h2>5. Limitation of Liability</h2>
        <p>Under no circumstances shall Smart Brain Creations be held liable for any loss or damage arising from the use of the website or reliance on its content.</p>

        <h2>6. Consent</h2>
        <p>By using our website, you hereby consent to this disclaimer and agree to its terms.</p>

        <h2>7. Updates</h2>
        <p>We may update this Disclaimer from time to time. Any changes will be reflected on this page.</p>

        <h2>8. Contact Us</h2>
        <p>If you have any questions regarding this Disclaimer, please contact:</p>
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
