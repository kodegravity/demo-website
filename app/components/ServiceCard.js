import Link from 'next/link';

export default function ServiceCard({ title, description, href, icon }) {
  return (
    <Link href={href}>
      <div className="service-card">
        {icon && <div className="service-icon">{icon}</div>}
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="card-arrow">→</span>
      </div>
    </Link>
  );
}
