'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="nav page-width" aria-label="Main navigation">
      <Link className="brand" href="/" aria-label="Quantorule home">
        <span className="brand-mark" aria-hidden="true">Q</span>
        <span>Quantorule</span>
      </Link>
      
      <div className="nav-links">
        <Link href="/">Home</Link>
        <div className="dropdown-container">
          <button 
            className="dropdown-trigger"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            Services
          </button>
          {servicesOpen && (
            <div className="dropdown-menu">
              <Link href="/services/software-development">Software Development</Link>
              <Link href="/services/cloud-infrastructure">Cloud & Infrastructure</Link>
              <Link href="/services/automation-ai">Automation & AI</Link>
              <Link href="/services/staffing-talent">Staffing & Talent</Link>
            </div>
          )}
        </div>
        <Link href="/industries">Industries</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <Link className="button button-small button-dark" href="/contact">
        Start a Project <span aria-hidden="true">-&gt;</span>
      </Link>

      <style jsx>{`
        .dropdown-container {
          position: relative;
        }
        
        .dropdown-trigger {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 13px;
          color: #48606c;
        }
        
        .dropdown-trigger:hover {
          color: var(--teal);
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border: 1px solid var(--line);
          border-radius: 4px;
          min-width: 200px;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          margin-top: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .dropdown-menu a {
          padding: 12px 16px;
          border-bottom: 1px solid #eee;
          font-size: 13px;
          color: var(--ink);
          transition: background .2s;
        }
        
        .dropdown-menu a:last-child {
          border-bottom: none;
        }
        
        .dropdown-menu a:hover {
          background: #e6f1ed;
          color: var(--teal);
        }
      `}</style>
    </nav>
  );
}
