import Link from 'next/link';
import CTA from '../../components/CTA';

export const metadata = {
  title: 'Software Development | Quantorule',
  description: 'Custom web applications, desktop software, internal tools, and business dashboards.',
};

export default function SoftwareDevelopment() {
  return (
    <main>
      {/* Hero */}
      <section className="hero service-hero" style={{ minHeight: '400px' }}>
        <div className="page-width" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>Software Development</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', color: '#60727d', lineHeight: '1.6' }}>Custom web and desktop applications built for your business</p>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="page-width">
          <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
            <h2 style={{ marginBottom: '24px' }}>Tailored Software Solutions</h2>
            <p style={{ fontSize: '16px', color: '#60727d', lineHeight: '1.7', marginBottom: '16px' }}>
              Every business has unique needs. Our team develops custom software applications that solve your specific challenges, integrate with your existing systems, and scale with your growth.
            </p>
            <p style={{ fontSize: '16px', color: '#60727d', lineHeight: '1.7' }}>
              From modern web applications to complex desktop software, we deliver production-ready solutions with clean code, thorough testing, and comprehensive documentation.
            </p>
          </div>

          <div className="outcomes-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div className="outcome">
              <strong>Web Applications</strong>
              <h3>Modern & Responsive</h3>
              <p>React, Next.js, Vue.js applications for desktop and mobile browsers.</p>
            </div>
            <div className="outcome">
              <strong>Desktop Software</strong>
              <h3>Cross-Platform</h3>
              <p>Windows, Mac, and Linux applications using Electron and native frameworks.</p>
            </div>
            <div className="outcome">
              <strong>Internal Tools</strong>
              <h3>Business Efficiency</h3>
              <p>Custom dashboards, admin panels, and tools for internal operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section section-light">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Technology Stack</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Frontend</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#60727d', fontSize: '14px', lineHeight: '2' }}>
                <li>React & Next.js</li>
                <li>Vue.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Backend</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#60727d', fontSize: '14px', lineHeight: '2' }}>
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>DevOps</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#60727d', fontSize: '14px', lineHeight: '2' }}>
                <li>Docker & Kubernetes</li>
                <li>AWS & Azure</li>
                <li>CI/CD Pipelines</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Our Development Process</h2>
          <div className="process-grid">
            <div>
              <p className="process-number">01</p>
              <h3>Requirements & Planning</h3>
              <p>We deeply understand your business requirements and plan the architecture.</p>
            </div>
            <div>
              <p className="process-number">02</p>
              <h3>Design & Prototyping</h3>
              <p>User interface design, prototyping, and technical specification review.</p>
            </div>
            <div>
              <p className="process-number">03</p>
              <h3>Development</h3>
              <p>Agile development with regular updates and milestone reviews.</p>
            </div>
            <div>
              <p className="process-number">04</p>
              <h3>Testing & Launch</h3>
              <p>Quality assurance, deployment, and post-launch support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to build your custom application?"
        description="Let's explore how we can develop software that powers your business."
        buttonText="Start a project"
        buttonHref="/contact"
      />
    </main>
  );
}
