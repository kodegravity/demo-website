import Link from 'next/link';
import CTA from '../../components/CTA';

export const metadata = {
  title: 'Staffing & Talent | Quantorule',
  description: 'Expert technical staff, project teams, and long-term support resources.',
};

export default function StaffingTalent() {
  return (
    <main>
      {/* Hero */}
      <section className="hero service-hero" style={{ minHeight: '400px' }}>
        <div className="page-width" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>Staffing & Talent</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', color: '#60727d', lineHeight: '1.6' }}>Expert technical resources for your team</p>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="page-width">
          <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
            <h2 style={{ marginBottom: '24px' }}>Flexible Technical Resources</h2>
            <p style={{ fontSize: '16px', color: '#60727d', lineHeight: '1.7', marginBottom: '16px' }}>
              Building and maintaining a skilled technical team is challenging. Whether you need additional developers, DevOps engineers, QA specialists, or technical architects, Quantorule provides experienced professionals who integrate seamlessly with your organization.
            </p>
            <p style={{ fontSize: '16px', color: '#60727d', lineHeight: '1.7' }}>
              From short-term project support to long-term dedicated roles, our staffing solutions are flexible and scalable to meet your changing needs.
            </p>
          </div>

          <div className="outcomes-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div className="outcome">
              <strong>Dedicated Teams</strong>
              <h3>Committed Support</h3>
              <p>Full-time developers and engineers working exclusively for your project.</p>
            </div>
            <div className="outcome">
              <strong>Project Resources</strong>
              <h3>Short-Term Support</h3>
              <p>Specialists for specific projects or phases of development.</p>
            </div>
            <div className="outcome">
              <strong>Consulting & Strategy</strong>
              <h3>Expert Guidance</h3>
              <p>Technical architects and consultants for guidance and oversight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="section section-light">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Available Roles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Development</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#60727d', fontSize: '14px', lineHeight: '2' }}>
                <li>Full Stack Developers</li>
                <li>Frontend Engineers</li>
                <li>Backend Engineers</li>
                <li>Mobile Developers</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Infrastructure</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#60727d', fontSize: '14px', lineHeight: '2' }}>
                <li>DevOps Engineers</li>
                <li>Cloud Architects</li>
                <li>System Administrators</li>
                <li>Security Engineers</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Support & QA</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#60727d', fontSize: '14px', lineHeight: '2' }}>
                <li>QA Engineers</li>
                <li>Technical Support</li>
                <li>Solutions Architects</li>
                <li>Technical Leads</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Our Staffing Process</h2>
          <div className="process-grid">
            <div>
              <p className="process-number">01</p>
              <h3>Understand Your Needs</h3>
              <p>We assess your team, skills gaps, and project requirements.</p>
            </div>
            <div>
              <p className="process-number">02</p>
              <h3>Identify Candidates</h3>
              <p>We source vetted professionals matching your specific needs.</p>
            </div>
            <div>
              <p className="process-number">03</p>
              <h3>Seamless Integration</h3>
              <p>Resources onboard and integrate with your team quickly.</p>
            </div>
            <div>
              <p className="process-number">04</p>
              <h3>Ongoing Support</h3>
              <p>We manage logistics and ensure long-term satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Strengthen your team"
        description="Tell us about your staffing needs and let's find the right fit."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </main>
  );
}
