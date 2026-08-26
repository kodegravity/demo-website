import Link from 'next/link';
import CTA from '../../components/CTA';

export const metadata = {
  title: 'Cloud & Infrastructure | Quantorule',
  description: 'Cloud platforms, DevOps, infrastructure as code, and secure deployments.',
};

export default function CloudInfrastructure() {
  return (
    <main>
      {/* Hero */}
      <section className="hero service-hero" style={{ minHeight: '400px' }}>
        <div className="page-width" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>Cloud & Infrastructure</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', color: '#60727d', lineHeight: '1.6' }}>Scalable, secure, and reliable cloud solutions</p>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="page-width">
          <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
            <h2 style={{ marginBottom: '24px' }}>Modern Cloud Architecture</h2>
            <p style={{ fontSize: '16px', color: '#60727d', lineHeight: '1.7', marginBottom: '16px' }}>
              Cloud infrastructure is the backbone of modern business applications. We design, deploy, and manage cloud platforms that are secure, scalable, and cost-efficient.
            </p>
            <p style={{ fontSize: '16px', color: '#60727d', lineHeight: '1.7' }}>
              Whether you're migrating legacy systems, building new cloud-native applications, or optimizing existing infrastructure, we provide expert guidance and hands-on implementation.
            </p>
          </div>

          <div className="outcomes-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div className="outcome">
              <strong>Cloud Migration</strong>
              <h3>Seamless Transition</h3>
              <p>Move your applications and data to cloud with minimal disruption.</p>
            </div>
            <div className="outcome">
              <strong>Infrastructure as Code</strong>
              <h3>Automation & Control</h3>
              <p>Repeatable, version-controlled infrastructure deployments.</p>
            </div>
            <div className="outcome">
              <strong>DevOps & CI/CD</strong>
              <h3>Faster Delivery</h3>
              <p>Automated testing, deployment, and continuous monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="section section-light">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Cloud Platforms & Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ marginBottom: '16px' }}>AWS</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#60727d', fontSize: '14px', lineHeight: '2' }}>
                <li>EC2 & Auto Scaling</li>
                <li>RDS & DynamoDB</li>
                <li>S3 & CloudFront</li>
                <li>Lambda & Serverless</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Azure</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#60727d', fontSize: '14px', lineHeight: '2' }}>
                <li>Virtual Machines</li>
                <li>App Services</li>
                <li>SQL Database</li>
                <li>Cosmos DB</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>GCP</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#60727d', fontSize: '14px', lineHeight: '2' }}>
                <li>Compute Engine</li>
                <li>Cloud SQL</li>
                <li>Cloud Storage</li>
                <li>BigQuery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Infrastructure Services</h2>
          <div className="process-grid">
            <div>
              <p className="process-number">01</p>
              <h3>Architecture Design</h3>
              <p>Design scalable, secure cloud architecture aligned with business needs.</p>
            </div>
            <div>
              <p className="process-number">02</p>
              <h3>Deployment</h3>
              <p>Infrastructure as Code and automated deployments for consistency.</p>
            </div>
            <div>
              <p className="process-number">03</p>
              <h3>Monitoring</h3>
              <p>24/7 monitoring, logging, and alerting for system health.</p>
            </div>
            <div>
              <p className="process-number">04</p>
              <h3>Optimization</h3>
              <p>Continuous cost optimization and performance tuning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Build reliable cloud infrastructure"
        description="Let's design and deploy cloud solutions that scale with your business."
        buttonText="Start a project"
        buttonHref="/contact"
      />
    </main>
  );
}
