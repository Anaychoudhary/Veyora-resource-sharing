
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const resources = [
  {
    id: "1",
    name: "Advanced Computing Lab",
    category: "Laboratory",
    location: "Block A · Room 204",
    price: "Free",
    icon: "💻",
  },
  {
    id: "2",
    name: "Professional Camera Kit",
    category: "Equipment",
    location: "Media Center",
    price: "Free",
    icon: "📷",
  },
  {
    id: "3",
    name: "3D Printing Station",
    category: "Fabrication",
    location: "Innovation Hub",
    price: "Free",
    icon: "🖨️",
  },
  {
    id: "4",
    name: "Seminar Hall",
    category: "Space",
    location: "Block B · Ground Floor",
    price: "Free",
    icon: "🏛️",
  },
];

export default function Explore() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All resources");
  const filters = ["All resources", "Equipment", "Laboratories", "Spaces"];
  const visibleResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory =
        category === "All resources" ||
        (category === "Equipment" &&
          ["Equipment", "Fabrication"].includes(resource.category)) ||
        (category === "Laboratories" && resource.category === "Laboratory") ||
        (category === "Spaces" && resource.category === "Space");
      const matchesQuery =
        !normalizedQuery ||
        `${resource.name} ${resource.category} ${resource.location}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main className="app-page">
      <nav className="nav">
        <Link href="/" className="brand">Veyora</Link>
        <Link href="/dashboard" className="nav-link">My Dashboard</Link>
      </nav>

      <section className="page-heading">
        <p className="eyebrow">DISCOVER</p>
        <h2>Explore resources</h2>
        <p>Find the tools and spaces you need to bring your ideas to life.</p>
      </section>

      <div className="search-box">
        <span>🔍</span>
        <input
          aria-label="Search resources"
          placeholder="Search labs, equipment, spaces..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="filters">
        {filters.map((filter) => (
          <button
            className={`filter${category === filter ? " active" : ""}`}
            key={filter}
            type="button"
            aria-pressed={category === filter}
            onClick={() => setCategory(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <section className="resource-grid">
        {visibleResources.map((resource) => (
          <article className="resource-card" key={resource.id}>
            <div className="resource-image">{resource.icon}</div>
            <div className="resource-info">
              <span className="category">{resource.category}</span>
              <h3>{resource.name}</h3>
              <p>📍 {resource.location}</p>
              <div className="resource-bottom">
                <strong>{resource.price}</strong>
                <Link href={`/resources/${resource.id}`} className="small-button">
                  View details →
                </Link>
              </div>
            </div>
          </article>
        ))}
        {visibleResources.length === 0 && (
          <p role="status">No resources match your search.</p>
        )}
      </section>
    </main>
  );
}
