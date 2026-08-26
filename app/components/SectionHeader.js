export default function SectionHeader({ title, description, note }) {
  return (
    <div className="section-heading">
      <div>
        <p className="heading-note">{note}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
  );
}
