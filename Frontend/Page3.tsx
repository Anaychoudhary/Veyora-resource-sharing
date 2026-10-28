
import Link from "next/link";
import { notFound } from "next/navigation";

const details: Record<string, {
  name: string;
  category: string;
  location: string;
  icon: string;
  description: string;
}> = {
  "1": {
    name: "Advanced Computing Lab",
    category: "Laboratory",
    location: "Block A · Room 204",
    icon: "💻",
    description:
      "A well-equipped computing lab for students working on programming, development and academic projects.",
  },
  "2": {
    name: "Professional Camera Kit",
    category: "Equipment",
    location: "Media Center",
    icon: "📷",
    description:
      "A professional camera kit available for student photography, filmmaking and media projects.",
  },
  "3": {
    name: "3D Printing Station",
    category: "Fabrication",
    location: "Innovation Hub",
    icon: "🖨️",
    description:
      "A 3D printing resource for prototyping, design and engineering projects.",
  },
  "4": {
    name: "Seminar Hall",
    category: "Space",
    location: "Block B · Ground Floor",
    icon: "🏛️",
    description:
      "A shared space for workshops, group meetings and academic presentations.",
  },
};

export default async function ResourceDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const resource = details[id];

  if (!resource) {
    notFound();
  }

  return (
    <main className="app-page">
      <nav className="nav">
        <Link href="/" className="brand">Veyora</Link>
        <Link href="/explore" className="nav-link">← Explore resources</Link>
      </nav>

      <section className="detail-layout">
        <div className="detail-image">{resource.icon}</div>

        <div className="detail-content">
          <span className="category">{resource.category}</span>
          <h2>{resource.name}</h2>
          <p className="location">📍 {resource.location}</p>
          <p>{resource.description}</p>

          <div className="detail-box">
            <p><strong>Availability</strong></p>
            <p>Available for booking</p>
            <hr />
            <p><strong>Access</strong></p>
            <p>Subject to owner approval</p>
            <hr />
            <p><strong>Usage</strong></p>
            <p>Follow the resource owner's guidelines.</p>
          </div>

          <Link href="/dashboard" className="primary-button">
            Request booking →
          </Link>
        </div>
      </section>
    </main>
  );
}
