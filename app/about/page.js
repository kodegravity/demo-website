import Link from 'next/link';
import CTA from '../components/CTA';

export const metadata = {
  title: 'About Quantorule | IT Consulting & Software Development',
  description: 'Learn about Quantorule\'s mission, team, and commitment to delivering excellence.',
};

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="hero service-hero" style={{ minHeight: '400px' }}>
        <div className="page-width" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>About Quantorule</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', color: '#60727d', lineHeight: '1.6' }}>Building reliable technology for growing businesses</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="page-width">
          <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
            <h2 style={{ marginBottom: '24px' }}>Our Mission</h2>
            <p style={{ fontSize: '16px', color: '#60727d', lineHeight: '1.7', marginBottom: '16px' }}>
              At Quantorule, we believe that technology should empower businesses, not complicate them. Our mission is to deliver custom software, cloud solutions, and strategic technology guidance that enables medium-sized businesses to compete and grow.
            </p>
            <p style={{ fontSize: '16px', color: '#60727d', lineHeight: '1.7' }}>
              We combine deep technical expertise with practical business thinking to create solutions that are reliable, scalable, and aligned with your strategic goals.
            </p>
          </div>

          <div className="outcomes-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div className="outcome">
              <strong>Custom Solutions</strong>
              <h3>Built for You</h3>
              <p>We don't believe in one-size-fits-all. Every solution is tailored to your specific needs.</p>
            </div>
            <div className="outcome">
              <strong>Strategic Thinking</strong>
              <h3>Aligned with Goals</h3>
              <p>Technology should drive your business forward, not just solve today's problems.</p>
            </div>
            <div className="outcome">
              <strong>Reliable Delivery</strong>
              <h3>On Time, On Budget</h3>
              <p>We take pride in delivering quality work that meets commitments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Value */}
      <section className="section section-light">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>What We Value</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Excellence</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We strive for the highest standards in every aspect of our work, from code quality to client communication.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Partnership</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We see our clients as partners, working together toward shared goals and mutual success.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Integrity</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We're honest about capabilities, timelines, and tradeoffs. Your trust is our most valuable asset.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Innovation</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We stay current with technology trends and continuously improve our capabilities and processes.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Collaboration</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We believe in open communication, regular feedback, and working closely with your team.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Results</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>Ultimately, we're focused on delivering measurable value that improves your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Our Experience</h2>
          <div className="process-grid">
            <div>
              <p className="process-number">100+</p>
              <h3>Projects Delivered</h3>
              <p>Successful engagements across diverse industries and project types.</p>
            </div>
            <div>
              <p className="process-number">20+</p>
              <h3>Industries Served</h3>
              <p>Deep expertise across financial services, healthcare, manufacturing, and more.</p>
            </div>
            <div>
              <p className="process-number">15+</p>
              <h3>Team Members</h3>
              <p>Talented developers, engineers, and specialists dedicated to your success.</p>
            </div>
            <div>
              <p className="process-number">100%</p>
              <h3>Commitment</h3>
              <p>Every project receives our full attention and expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-light">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Get in Touch</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Email</h3>
              <p style={{ color: '#60727d' }}><a href="mailto:info@quantorule.com" style={{ color: 'var(--teal)', fontWeight: '600' }}>info@quantorule.com</a></p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Address</h3>
              <p style={{ color: '#60727d' }}>10 Four Seasons Pl Suite 1000<br />Etobicoke, ON M9B 6H7</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Let's Talk</h3>
              <p><Link className="button button-small button-primary" href="/contact">Schedule a Call</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to work together?"
        description="Let's discuss how we can help transform your business with technology."
        buttonText="Start a conversation"
        buttonHref="/contact"
      />
    </main>
  );
}
