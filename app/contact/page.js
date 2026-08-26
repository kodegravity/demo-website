'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to an email service or backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main>
      {/* Hero */}
      <section className="hero service-hero" style={{ minHeight: '400px' }}>
        <div className="page-width" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>Get in Touch</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', color: '#60727d', lineHeight: '1.6' }}>Let's discuss how we can help your business</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="page-width">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            {/* Form */}
            <div>
              <h2 style={{ marginBottom: '32px' }}>Send us a message</h2>
              {submitted && (
                <div style={{
                  padding: '16px',
                  marginBottom: '24px',
                  backgroundColor: '#e6f1ed',
                  border: '1px solid var(--teal)',
                  borderRadius: '4px',
                  color: '#2d6b62'
                }}>
                  <p style={{ margin: 0 }}>Thanks for reaching out! We'll get back to you soon.</p>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid var(--line)',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid var(--line)',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid var(--line)',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid var(--line)',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="button button-primary"
                  style={{ width: '100%' }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: '48px' }}>Contact Information</h2>

              <div style={{ marginBottom: '48px' }}>
                <p style={{ fontSize: '14px', color: '#60727d', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '.05em' }}>Email</p>
                <p><a href="mailto:info@quantorule.com" style={{ fontSize: '18px', color: 'var(--teal)', fontWeight: '600', textDecoration: 'none' }}>info@quantorule.com</a></p>
              </div>

              <div style={{ marginBottom: '48px' }}>
                <p style={{ fontSize: '14px', color: '#60727d', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '.05em' }}>Address</p>
                <p style={{ fontSize: '16px', color: 'var(--ink)', lineHeight: '1.6' }}>
                  10 Four Seasons Pl Suite 1000<br />
                  Etobicoke, ON M9B 6H7<br />
                  Canada
                </p>
              </div>

              <div style={{ marginBottom: '48px' }}>
                <p style={{ fontSize: '14px', color: '#60727d', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '.05em' }}>Response Time</p>
                <p style={{ fontSize: '16px', color: 'var(--ink)' }}>We typically respond to inquiries within 1-2 business days.</p>
              </div>

              <div style={{ 
                padding: '24px', 
                backgroundColor: '#eaf1ed', 
                borderRadius: '4px',
                borderLeft: '3px solid var(--teal)'
              }}>
                <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Quick Response</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#60727d', lineHeight: '1.6' }}>
                  Have a time-sensitive question? Email us directly at <a href="mailto:info@quantorule.com" style={{ color: 'var(--teal)', fontWeight: '600' }}>info@quantorule.com</a> for priority handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-light">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ marginBottom: '12px' }}>What's the typical project timeline?</h3>
              <p style={{ color: '#60727d', fontSize: '14px', lineHeight: '1.6' }}>Project timelines vary based on scope and complexity. Most projects range from 2-6 months, but we'll provide a detailed estimate after understanding your requirements.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '12px' }}>Do you offer ongoing support?</h3>
              <p style={{ color: '#60727d', fontSize: '14px', lineHeight: '1.6' }}>Yes. We provide maintenance, updates, and technical support packages tailored to your needs beyond the initial project delivery.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '12px' }}>What industries do you serve?</h3>
              <p style={{ color: '#60727d', fontSize: '14px', lineHeight: '1.6' }}>We have experience across financial services, healthcare, manufacturing, retail, and more. Visit our industries page to learn more.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '12px' }}>How do we get started?</h3>
              <p style={{ color: '#60727d', fontSize: '14px', lineHeight: '1.6' }}>Send us a message above or email us directly. We'll schedule a consultation to discuss your needs and how we can help.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
