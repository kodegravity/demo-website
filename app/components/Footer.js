import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-width footer-grid">
        <div>
          <div className="footer-header">
            <div className="brand">
              <span className="brand-mark" aria-hidden="true">Q</span>
              <span>Quantorule</span>
            </div>
            <p className="footer-tagline">IT consulting and software development for growing businesses.</p>
            <div className="footer-contact">
              <p><strong>Email:</strong> <a href="mailto:info@quantorule.com">info@quantorule.com</a></p>
              <p><strong>Address:</strong> 10 Four Seasons Pl Suite 1000, Etobicoke, ON M9B 6H7</p>
            </div>
          </div>
        </div>

        <div>
          <p className="footer-label">Services</p>
          <ul className="footer-links">
            <li><Link href="/services/software-development">Software Development</Link></li>
            <li><Link href="/services/cloud-infrastructure">Cloud & Infrastructure</Link></li>
            <li><Link href="/services/automation-ai">Automation & AI</Link></li>
            <li><Link href="/services/staffing-talent">Staffing & Talent</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer-label">Company</p>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer-label">Resources</p>
          <ul className="footer-links">
            <li><Link href="/services">All Services</Link></li>
            <li><a href="mailto:info@quantorule.com">Get in Touch</a></li>
            <li><Link href="/contact">Start a Project</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom page-width">
        <p>&copy; 2026 Quantorule. All rights reserved.</p>
        <p>Building reliable digital systems for growing businesses.</p>
      </div>
    </footer>
  );
}
