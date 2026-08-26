import Link from 'next/link';
import ServiceCard from './components/ServiceCard';
import CTA from './components/CTA';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="top">
        <div className="hero-content page-width">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> TRUSTED TECHNOLOGY PARTNERS</p>
            <h1>Custom software, cloud solutions, and IT expertise for <em>growing businesses.</em></h1>
            <p className="hero-text">Quantorule delivers comprehensive IT consulting, custom software development, cloud infrastructure, automation, and technical staffing. We help medium-sized businesses build reliable, scalable digital systems.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Start a project <span aria-hidden="true">→</span></Link>
              <Link className="text-link" href="#services">View services <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="A diagram representing connected business systems">
            <div className="visual-label">BUSINESS SYSTEMS <span>01 / 04</span></div>
            <div className="system-map">
              <span className="map-line line-one" /><span className="map-line line-two" /><span className="map-line line-three" />
              <div className="map-node node-core"><strong>YOUR</strong><small>BUSINESS</small></div>
              <div className="map-node node-cloud"><span className="node-dot" />CLOUD</div>
              <div className="map-node node-data"><span className="node-dot" />DATA</div>
              <div className="map-node node-team"><span className="node-dot" />TOOLS</div>
            </div>
            <div className="visual-footer"><span>INTEGRATED & SCALABLE</span><span className="pulse-dot" /> <span>BUILT TO GROW</span></div>
          </div>
        </div>
        <div className="scroll-cue page-width"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
      </section>

      {/* Trust Badges */}
      <section className="outcomes section-light">
        <div className="page-width outcomes-grid">
          <p className="section-kicker">WHY CHOOSE QUANTORULE</p>
          <div className="outcome"><strong>01</strong><h3>Strategic Planning</h3><p>We align technology with your business goals and growth trajectory.</p></div>
          <div className="outcome"><strong>02</strong><h3>Expert Delivery</h3><p>Experienced teams delivering production-ready solutions on time and budget.</p></div>
          <div className="outcome"><strong>03</strong><h3>Long-term Support</h3><p>Ongoing technical support, maintenance, and optimization beyond launch.</p></div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section" id="services">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="heading-note">OUR EXPERTISE</p>
              <h2>Services that drive business growth</h2>
              <p className="section-description">We combine strategy, design, and technology to solve real business problems.</p>
            </div>
          </div>

          <div className="service-grid">
            <ServiceCard
              title="Software Development"
              description="Custom web and desktop applications built for your specific business needs."
              href="/services/software-development"
            />
            <ServiceCard
              title="Cloud & Infrastructure"
              description="Secure, scalable cloud platforms and infrastructure for enterprise growth."
              href="/services/cloud-infrastructure"
            />
            <ServiceCard
              title="Automation & AI"
              description="Workflow automation and AI-powered solutions to improve efficiency."
              href="/services/automation-ai"
            />
            <ServiceCard
              title="Staffing & Talent"
              description="Technical staffing and expert resources for your team."
              href="/services/staffing-talent"
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section section-light">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="heading-note">INDUSTRIES</p>
              <h2>Expertise across key sectors</h2>
              <p className="section-description">We serve businesses in finance, healthcare, manufacturing, retail, and more.</p>
            </div>
          </div>

          <div className="industry-list">
            <div>
              <h3>Financial Services</h3>
              <p>Secure, compliant systems for banking, fintech, and investment platforms.</p>
            </div>
            <div>
              <h3>Healthcare</h3>
              <p>HIPAA-compliant solutions for patient management and clinical workflows.</p>
            </div>
            <div>
              <h3>Manufacturing</h3>
              <p>Digital transformation, supply chain, and operational efficiency systems.</p>
            </div>
            <div>
              <h3>Retail & E-Commerce</h3>
              <p>Scalable platforms and integrations for omnichannel retail operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="heading-note">OUR APPROACH</p>
              <h2>How we deliver success</h2>
            </div>
          </div>

          <div className="process-grid">
            <div>
              <p className="process-number">01</p>
              <h3>Discovery & Planning</h3>
              <p>We understand your business, challenges, and goals before writing code.</p>
            </div>
            <div>
              <p className="process-number">02</p>
              <h3>Strategy & Design</h3>
              <p>Clear roadmaps, architecture, and design that align with your vision.</p>
            </div>
            <div>
              <p className="process-number">03</p>
              <h3>Development & Testing</h3>
              <p>Agile development with continuous testing and quality assurance.</p>
            </div>
            <div>
              <p className="process-number">04</p>
              <h3>Deployment & Support</h3>
              <p>Smooth launches and ongoing technical support for your systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to transform your business?"
        description="Let's discuss how Quantorule can deliver the technology solutions your business needs to thrive."
        buttonText="Start a project"
        buttonHref="/contact"
      />
    </main>
  );
}
