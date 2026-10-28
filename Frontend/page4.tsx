
import Link from "next/link";

export default function StudentDashboard() {
  return (
    <main className="app-page">
      <nav className="nav">
        <Link href="/" className="brand">Veyora</Link>
        <Link href="/explore" className="nav-link">Explore resources</Link>
      </nav>

      <section className="page-heading">
        <p className="eyebrow">BUYER / STUDENT</p>
        <h2>My Dashboard</h2>
        <p>Manage your resource requests and bookings.</p>
      </section>

      <div className="stats-grid">
        <div className="stat-card">
          <span>My bookings</span>
          <h3>03</h3>
        </div>
        <div className="stat-card">
          <span>Pending requests</span>
          <h3>01</h3>
        </div>
        <div className="stat-card">
          <span>Approved</span>
          <h3>02</h3>
        </div>
      </div>

      <section className="dashboard-section">
        <h3>Recent bookings</h3>

        <div className="booking-row">
          <div>
            <h4>Professional Camera Kit</h4>
            <p>Oct 29 · Media Center</p>
          </div>
          <span className="status pending">Pending</span>
        </div>

        <div className="booking-row">
          <div>
            <h4>Advanced Computing Lab</h4>
            <p>Oct 30 · Block A</p>
          </div>
          <span className="status approved">Approved</span>
        </div>

        <div className="booking-row">
          <div>
            <h4>3D Printing Station</h4>
            <p>Oct 31 · Innovation Hub</p>
          </div>
          <span className="status approved">Approved</span>
        </div>

        <Link href="/explore" className="primary-button">
          Find more resources →
        </Link>
      </section>
    </main>
  );
}
