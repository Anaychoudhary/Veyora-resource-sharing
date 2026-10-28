
import Link from "next/link";

export default function Home() {
  return (
    <main className="welcome">
      <nav className="nav">
        <h1>Veyora</h1>
        <span>Resource Sharing Platform</span>
      </nav>

      <section className="welcome-content">
        <p className="eyebrow">SHARE MORE. WASTE LESS.</p>
        <h2>Welcome to Veyora</h2>
        <p className="subtitle">
          Access the resources you need.
          <br />
          Share the resources you have.
        </p>

        <div className="role-grid">
          <Link href="/explore" className="role-card">
            <span className="role-icon">🎓</span>
            <h3>Enter as Buyer</h3>
            <p>I'm a student looking for resources.</p>
            <span className="role-button">Explore resources →</span>
          </Link>

          <Link href="/owner" className="role-card">
            <span className="role-icon">🏢</span>
            <h3>Enter as Seller</h3>
            <p>I'm an owner sharing resources.</p>
            <span className="role-button">Manage resources →</span>
          </Link>
        </div>

        <p className="welcome-footer">
          Trusted access · Fair sharing · Better opportunities
        </p>
      </section>
    </main>
  );
}
