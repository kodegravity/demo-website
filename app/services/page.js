import Link from 'next/link';
import ServiceCard from '../components/ServiceCard';
import CTA from '../components/CTA';

export const metadata = {
  title: 'Services | Quantorule',
  description: 'Custom software development, cloud infrastructure, automation, and IT staffing solutions.',
};

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="hero service-hero" style={{ minHeight: '400px' }}>
        <div className="page-width" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>Our Services</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', color: '#60727d', lineHeight: '1.6' }}>Comprehensive IT solutions tailored to your business needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="page-width">
          <div className="service-grid">
            <ServiceCard
              title="Software Development"
              description="Custom web and desktop applications, internal tools, and business dashboards."
              href="/services/software-development"
            />
            <ServiceCard
              title="Cloud & Infrastructure"
              description="Cloud platforms, DevOps, infrastructure as code, and secure deployments."
              href="/services/cloud-infrastructure"
            />
            <ServiceCard
              title="Automation & AI"
              description="Workflow automation, AI-assisted operations, and intelligent integrations."
              href="/services/automation-ai"
            />
            <ServiceCard
              title="Staffing & Talent"
              description="Expert technical staff, project teams, and long-term support resources."
              href="/services/staffing-talent"
            />
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section section-light">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="heading-note">OUR ADVANTAGE</p>
              <h2>Why businesses choose Quantorule</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Industry Expertise</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>Years of experience serving financial services, healthcare, manufacturing, and retail sectors.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Strategic Approach</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We align technology with business goals, not the other way around.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Quality & Support</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>Rigorous testing, clear documentation, and ongoing technical support.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Proven Track Record</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>Successful delivery of complex projects for medium and large organizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Let's discuss your technology needs"
        description="Schedule a consultation with our team to explore how we can help transform your business."
        buttonText="Schedule a call"
        buttonHref="/contact"
      />
    </main>
  );
}
