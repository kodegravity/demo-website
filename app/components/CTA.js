import Link from 'next/link';

export default function CTA({ title, description, buttonText, buttonHref }) {
  return (
    <section className="section section-dark" id="contact">
      <div className="page-width">
        <div className="contact-section">
          <h2>{title}</h2>
          <p className="dark-copy">{description}</p>
          <Link className="button button-primary" href={buttonHref}>
            {buttonText} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
