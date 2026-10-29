
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Resource = {
  id: number;
  title: string;
  category: string;
  description: string;
  location: string;
  ownerName: string;
  ownerEmail: string;
  pricePerHour: number;
  available: boolean;
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

function normalizeCategory(category: string) {
  return category.trim().toLowerCase();
}

function getResourceIcon(category: string) {
  switch (normalizeCategory(category)) {
    case "equipment":
      return "📷";
    case "fabrication":
      return "🖨️";
    case "laboratory":
    case "laboratories":
      return "💻";
    case "space":
      return "🏛️";
    default:
      return "📦";
  }
}

function getResourcePrice(price: number) {
  return price === 0 ? "Free" : `₹${price}/hour`;
}

export default function Explore() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All resources");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const filters = ["All resources", "Equipment", "Laboratories", "Spaces"];

  useEffect(() => {
    async function fetchResources() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/api/resources`);

        if (!response.ok) {
          throw new Error("Failed to fetch resources");
        }

        const data: Resource[] = await response.json();
        setResources(data);
      } catch (err) {
        console.error("Resource loading error:", err);
        setError(
          "Unable to load resources. Please check whether the backend is running."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchResources();
  }, []);

  const visibleResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return resources.filter((resource) => {
      const normalizedCategory = normalizeCategory(resource.category);
      const matchesCategory =
        category === "All resources" ||
        (category === "Equipment" &&
          ["equipment", "fabrication"].includes(normalizedCategory)) ||
        (category === "Laboratories" &&
          ["laboratory", "laboratories"].includes(normalizedCategory)) ||
        (category === "Spaces" && normalizedCategory === "space");

      const matchesQuery =
        !normalizedQuery ||
        `${resource.title} ${resource.category} ${resource.location}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [resources, category, query]);

  return (
    <main className="app-page">
      <nav className="nav">
        <Link href="/" className="brand">
          Veyora
        </Link>

        <Link href="/dashboard" className="nav-link">
          My Dashboard
        </Link>
      </nav>

      <section className="page-heading">
        <p className="eyebrow">DISCOVER</p>
        <h2>Explore resources</h2>
        <p>
          Find the tools and spaces you need to bring your ideas to life.
        </p>
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
        {loading && (
          <p role="status">Loading resources...</p>
        )}

        {!loading && error && (
          <p role="alert">{error}</p>
        )}

        {!loading &&
          !error &&
          visibleResources.map((resource) => (
            <article className="resource-card" key={resource.id}>
              <div className="resource-image">
                {getResourceIcon(resource.category)}
              </div>

              <div className="resource-info">
                <span className="category">
                  {resource.category}
                </span>

                <h3>{resource.title}</h3>

                <p>📍 {resource.location}</p>

                <div className="resource-bottom">
                  <strong>
                    {getResourcePrice(resource.pricePerHour)}
                  </strong>

                  <Link
                    href={`/resources/${resource.id}`}
                    className="small-button"
                  >
                    View details →
                  </Link>
                </div>
              </div>
            </article>
          ))}

        {!loading && !error && visibleResources.length === 0 && (
          <p role="status">
            No resources match your search.
          </p>
        )}
      </section>
    </main>
  );
}
