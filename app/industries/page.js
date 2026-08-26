import Link from 'next/link';
import CTA from '../components/CTA';

export const metadata = {
  title: 'Industries | Quantorule',
  description: 'IT solutions for financial services, healthcare, manufacturing, retail, and more.',
};

export default function Industries() {
  return (
    <main>
      {/* Hero */}
      <section className="hero service-hero" style={{ minHeight: '400px' }}>
        <div className="page-width" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>Industries We Serve</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', color: '#60727d', lineHeight: '1.6' }}>Deep expertise across key business sectors</p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section">
        <div className="page-width">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '40px' }}>
            <div className="industry-card" style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>Financial Services</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6', marginBottom: '16px' }}>
                Banks, fintech companies, and investment firms trust Quantorule with their digital infrastructure. We build secure, compliant platforms for trading, payments, lending, and portfolio management.
              </p>
              <p style={{ color: '#60727d', fontSize: '14px' }}>Compliance: SOX, PCI-DSS, AML regulations</p>
            </div>

            <div className="industry-card" style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>Healthcare</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6', marginBottom: '16px' }}>
                Healthcare providers, medical device companies, and health tech startups rely on our HIPAA-compliant solutions for patient management, clinical workflows, and data analytics.
              </p>
              <p style={{ color: '#60727d', fontSize: '14px' }}>Compliance: HIPAA, HL7, FHIR standards</p>
            </div>

            <div className="industry-card" style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>Manufacturing</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6', marginBottom: '16px' }}>
                Industrial manufacturers benefit from our MES systems, supply chain solutions, and IoT integrations for operational efficiency and predictive maintenance.
              </p>
              <p style={{ color: '#60727d', fontSize: '14px' }}>Focus: ERP, MES, IoT, analytics</p>
            </div>

            <div className="industry-card" style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>Retail & E-Commerce</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6', marginBottom: '16px' }}>
                Retailers and e-commerce businesses leverage our platforms for omnichannel operations, inventory management, and customer analytics.
              </p>
              <p style={{ color: '#60727d', fontSize: '14px' }}>Focus: POS, inventory, CRM, analytics</p>
            </div>

            <div className="industry-card" style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>Professional Services</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6', marginBottom: '16px' }}>
                Consulting firms, law firms, and accounting practices use our business management platforms for project tracking, billing, and client management.
              </p>
              <p style={{ color: '#60727d', fontSize: '14px' }}>Focus: PSA, time tracking, billing</p>
            </div>

            <div className="industry-card" style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>Technology & Software</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6', marginBottom: '16px' }}>
                Tech companies trust Quantorule for infrastructure, APIs, platform development, and SaaS solutions that power their businesses.
              </p>
              <p style={{ color: '#60727d', fontSize: '14px' }}>Focus: SaaS, APIs, cloud-native</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section-light">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Why Industry Expertise Matters</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Compliance Knowledge</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We understand regulations specific to your industry and build compliant solutions from the ground up.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Domain Expertise</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>Our team has hands-on experience solving real problems in your industry.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Workflow Understanding</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We understand your business processes and design solutions that fit seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Let's discuss your industry challenges"
        description="We'd like to learn more about your business and how we can help."
        buttonText="Schedule a consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
