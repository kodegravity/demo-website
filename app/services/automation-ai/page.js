import Link from 'next/link';
import CTA from '../../components/CTA';

export const metadata = {
  title: 'Automation & AI | Quantorule',
  description: 'Workflow automation, AI-assisted operations, and intelligent integrations.',
};

export default function AutomationAI() {
  return (
    <main>
      {/* Hero */}
      <section className="hero service-hero" style={{ minHeight: '400px' }}>
        <div className="page-width" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>Automation & AI</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', color: '#60727d', lineHeight: '1.6' }}>Intelligent systems that work for your business</p>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="page-width">
          <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
            <h2 style={{ marginBottom: '24px' }}>Automate and Optimize</h2>
            <p style={{ fontSize: '16px', color: '#60727d', lineHeight: '1.7', marginBottom: '16px' }}>
              Manual processes waste time and introduce errors. We identify opportunities to automate workflows, integrate systems, and leverage AI to improve efficiency and decision-making.
            </p>
            <p style={{ fontSize: '16px', color: '#60727d', lineHeight: '1.7' }}>
              From robotic process automation to machine learning models, we deliver practical AI solutions that deliver measurable business value.
            </p>
          </div>

          <div className="outcomes-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div className="outcome">
              <strong>Workflow Automation</strong>
              <h3>Efficiency Gains</h3>
              <p>Automate repetitive tasks and complex business processes.</p>
            </div>
            <div className="outcome">
              <strong>System Integration</strong>
              <h3>Data Flow</h3>
              <p>Connect applications and databases for seamless data flow.</p>
            </div>
            <div className="outcome">
              <strong>AI & ML</strong>
              <h3>Smart Operations</h3>
              <p>Machine learning models for prediction, classification, and optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section section-light">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Practical Applications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Process Automation</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#60727d', fontSize: '14px', lineHeight: '2' }}>
                <li>Invoice processing</li>
                <li>Data entry automation</li>
                <li>Report generation</li>
                <li>Email workflows</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Data Integration</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#60727d', fontSize: '14px', lineHeight: '2' }}>
                <li>ETL pipelines</li>
                <li>Real-time data sync</li>
                <li>API integrations</li>
                <li>Data warehousing</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Machine Learning</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#60727d', fontSize: '14px', lineHeight: '2' }}>
                <li>Predictive analytics</li>
                <li>Sentiment analysis</li>
                <li>Anomaly detection</li>
                <li>Recommendation engines</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>AI Assistants</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#60727d', fontSize: '14px', lineHeight: '2' }}>
                <li>Chatbots & Q&A</li>
                <li>Document analysis</li>
                <li>Content generation</li>
                <li>Image recognition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="section">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Technologies & Tools</h2>
          <div className="process-grid">
            <div>
              <p className="process-number">01</p>
              <h3>Workflow Platforms</h3>
              <p>Zapier, Make, automation workflows for business processes.</p>
            </div>
            <div>
              <p className="process-number">02</p>
              <h3>ML Frameworks</h3>
              <p>Python, TensorFlow, scikit-learn for custom ML models.</p>
            </div>
            <div>
              <p className="process-number">03</p>
              <h3>AI APIs</h3>
              <p>GPT, Claude, and other LLMs for intelligent applications.</p>
            </div>
            <div>
              <p className="process-number">04</p>
              <h3>Data Platforms</h3>
              <p>BigQuery, Snowflake, data lakes for analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Unlock efficiency with automation and AI"
        description="Let's identify opportunities to automate workflows and enhance operations."
        buttonText="Discuss your needs"
        buttonHref="/contact"
      />
    </main>
  );
}
