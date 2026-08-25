export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav page-width" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Quantorule home">
            <span className="brand-mark" aria-hidden="true">B</span>
            <span>Quantorule</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#what-we-build">What we build</a>
            <a href="#approach">How we work</a>
          </div>
          <a className="button button-small button-dark" href="#contact">Talk to our team <span aria-hidden="true">-&gt;</span></a>
        </nav>

        <div className="hero-content page-width">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> SOFTWARE SYSTEMS FOR SERIOUS OPERATIONS</p>
            <h1>Build the systems your <em>business depends on.</em></h1>
            <p className="hero-text">We help growing teams plan, build, and maintain the software systems their operations depend on: custom portals, dashboards, workflow automation, cloud deployments, integrations, and long-term support.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Start a project <span aria-hidden="true">-&gt;</span></a>
              <a className="text-link" href="#services">View services <span aria-hidden="true">&#8594;</span></a>
            </div>
          </div>
          <div className="hero-visual delivery-brief" aria-label="Quantorule delivery brief">
            <div className="visual-label">A TYPICAL STARTING POINT <span>QUANTORULE / 01</span></div>
            <div className="brief-heading"><span className="brief-status" /> DELIVERY BRIEF <strong>IN REVIEW</strong></div>
            <div className="brief-row"><span>Business need</span><strong>Replace manual reporting</strong></div>
            <div className="brief-row"><span>Work involved</span><strong>Data flow / dashboard / access</strong></div>
            <div className="brief-row"><span>First milestone</span><strong>Working view of core metrics</strong></div>
            <div className="brief-note"><span className="quote-mark">&quot;</span><p>Start with the smallest useful system. Leave room for the next one.</p></div>
            <div className="visual-footer"><span>REQUIREMENTS FIRST</span><span>MAINTAINABLE BY DESIGN</span></div>
          </div>
        </div>
        <div className="scroll-cue page-width"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
      </section>

      <section className="outcomes section-light">
        <div className="page-width outcomes-grid">
          <p className="section-kicker">WHAT CLIENTS CAN EXPECT</p>
          <div className="outcome"><strong>01</strong><h3>Clear requirements</h3><p>A shared understanding of the problem, scope, and next useful decision.</p></div>
          <div className="outcome"><strong>02</strong><h3>Maintainable code</h3><p>Practical architecture and readable implementation your team can live with.</p></div>
          <div className="outcome"><strong>03</strong><h3>Deployment-ready delivery</h3><p>Security-minded foundations, handover, and support that continue after launch.</p></div>
        </div>
      </section>

      <section className="section page-width" id="services">
        <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> SERVICES</p><h2>Technical capability, tied to useful work.</h2></div><p className="heading-note">We bring senior engineering judgment to the systems behind your day-to-day operations, from a focused improvement to a new platform.</p></div>
        <div className="service-grid">
          {[['01', 'Custom software development', 'Purpose-built platforms and tools designed around how your business actually operates.'], ['02', 'Web application development', 'Fast, accessible web products that make complex work simpler for your customers and teams.'], ['03', 'Cloud deployment & infrastructure', 'Production-ready cloud environments with sensible foundations for performance and resilience.'], ['04', 'Business process automation', 'Remove repetitive work and connect the systems your people rely on every day.'], ['05', 'IT consulting & technical strategy', 'A clear technical direction for important decisions, investments, and change.'], ['06', 'DevOps & maintenance', 'Reliable releases, practical observability, and steady improvements after launch.'], ['07', 'System integration', 'Make your existing tools share data cleanly and work together as one system.'], ['08', 'Data dashboards & internal tools', 'Focused views and workflows that help teams understand and act on their data.']].map(([number, title, description]) => <article className="service-card" key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="card-arrow" aria-hidden="true">&#8599;</span></article>)}
        </div>
      </section>

      <section className="build-section section page-width" id="what-we-build"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> WHAT WE BUILD</p><h2>Systems that earn their place in the business.</h2></div><p className="heading-note">The best technology is specific. These are common starting points for teams replacing workarounds, disconnected tools, or an aging process.</p></div><div className="build-list"><div><span>01</span><h3>Internal dashboards</h3><p>Give teams a dependable view of performance, workload, and exceptions.</p></div><div><span>02</span><h3>Customer portals</h3><p>Make important information, requests, and status updates easier to access.</p></div><div><span>03</span><h3>Workflow automation</h3><p>Turn repeatable handoffs into clear, trackable steps with fewer manual touches.</p></div><div><span>04</span><h3>Cloud-hosted web apps</h3><p>Launch a secure, production-ready application with room to grow.</p></div><div><span>05</span><h3>Data and reporting tools</h3><p>Bring the right data together so people can make decisions with context.</p></div><div><span>06</span><h3>System integrations</h3><p>Connect the platforms your operation relies on and keep data moving cleanly.</p></div></div></section>

      <section className="capabilities section-dark" id="capabilities">
        <div className="page-width capability-layout"><div><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> ENGINEERING CAPABILITIES</p><h2>Deep technical work.<br /><em>Plainspoken partnership.</em></h2><p className="dark-copy">We work across the stack and stay close to the outcomes that matter. You get senior thinking without unnecessary complexity.</p><a className="button button-outline" href="#contact">Discuss your challenge <span aria-hidden="true">-&gt;</span></a></div><div className="capability-list"><div><span>01</span><h3>Product engineering</h3><p>Architecture, APIs, front-end experiences, and systems that are made to evolve.</p></div><div><span>02</span><h3>Cloud & operations</h3><p>Deployment pipelines, infrastructure, security fundamentals, and observability.</p></div><div><span>03</span><h3>Automation & data</h3><p>Integrations, workflow automation, reporting, and useful operational intelligence.</p></div></div></div>
      </section>

      <section className="section page-width" id="industries"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> WHO WE HELP</p><h2>For teams with momentum.</h2></div><p className="heading-note">Our best work starts with organizations that have outgrown off-the-shelf answers and need a thoughtful technical partner.</p></div><div className="industry-list"><div><span>01</span><h3>Professional services</h3><p>Make delivery, operations, and client work more visible and repeatable.</p></div><div><span>02</span><h3>Operations-led businesses</h3><p>Connect the systems and workflows that keep the business moving.</p></div><div><span>03</span><h3>Growing product teams</h3><p>Extend your engineering capacity with focused, senior support.</p></div><div><span>04</span><h3>Established organizations</h3><p>Modernize important systems without losing what already works.</p></div></div></section>

      <section className="process section-light" id="approach"><div className="page-width"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> HOW WE WORK</p><h2>A steady path from question to working system.</h2></div><p className="heading-note">Good delivery is a conversation, not a handoff. We keep decisions visible and progress tangible.</p></div><div className="process-grid"><div><span>01</span><h3>Discovery</h3><p>We learn the context, constraints, users, and outcome behind the request.</p></div><div><span>02</span><h3>Architecture</h3><p>We define the right scope, technical shape, and first measurable milestone.</p></div><div><span>03</span><h3>Build</h3><p>We work in focused increments, sharing working progress early and often.</p></div><div><span>04</span><h3>Launch</h3><p>We make the release deliberate, documented, and ready for real users.</p></div><div><span>05</span><h3>Support</h3><p>We stay accountable after launch, helping the system keep improving.</p></div></div></div></section>

      <section className="engagements section page-width"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> TYPICAL ENGAGEMENTS</p><h2>Useful work, clearly framed.</h2></div><p className="heading-note">Every engagement is different. These examples show the kinds of problems we help medium-sized businesses solve.</p></div><div className="engagement-grid"><article><span className="card-number">EXAMPLE 01</span><h3>Replace a manual reporting process</h3><p>A central dashboard and automated data flow gave an operations team a more dependable view of performance.</p><a className="text-link" href="#contact">Explore a similar challenge &#8594;</a></article><article><span className="card-number">EXAMPLE 02</span><h3>Bring a growing platform to production</h3><p>A practical cloud foundation and deployment workflow helped a product team ship with more confidence.</p><a className="text-link" href="#contact">Explore a similar challenge &#8594;</a></article></div></section>

      <section className="contact-section" id="contact"><div className="page-width contact-inner"><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> HAVE A COMPLEX PROBLEM?</p><h2>Let&apos;s make the next step clearer.</h2><p>Tell us what you&apos;re trying to build, improve, or untangle. We&apos;ll come prepared to listen and add useful perspective.</p><a className="button button-primary" href="mailto:info@quantorule.com">Start a conversation <span aria-hidden="true">-&gt;</span></a></div></section>

      <footer className="footer"><div className="page-width footer-grid"><div><a className="brand brand-footer" href="#top"><span className="brand-mark" aria-hidden="true">Q</span><span>Quantorule</span></a><p>Software, cloud, and IT systems built for growing businesses.</p></div><div><span className="footer-label">CONTACT</span><a href="mailto:info@quantorule.com">info@quantorule.com</a><span>Remote-first consulting team</span></div><div><span className="footer-label">NAVIGATE</span><a href="#services">Services</a><a href="#approach">Approach</a><a href="#contact">Contact</a></div></div><div className="page-width footer-bottom"><span>© 2026 Quantorule. All rights reserved.</span><span>Built with intention.</span></div></footer>
    </main>
  );
}
