
import Link from "next/link";

export default function OwnerDashboard() {
  return (
    <main className="app-page">
      <nav className="nav">
        <Link href="/" className="brand">Veyora</Link>
        <span className="nav-link">Seller / Resource Owner</span>
      </nav>

      <section className="page-heading">
        <p className="eyebrow">SELLER / TEACHER</p>
        <h2>Owner Dashboard</h2>
        <p>Manage your resources and incoming booking requests.</p>
      </section>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Listed resources</span>
          <h3>04</h3>
        </div>
        <div className="stat-card">
          <span>Booking requests</span>
          <h3>03</h3>
        </div>
        <div className="stat-card">
          <span>Active bookings</span>
          <h3>02</h3>
        </div>
      </div>

      <section className="dashboard-section">
        <div className="section-header">
          <h3>Booking requests</h3>
          <button className="primary-button">+ Add resource</button>
        </div>

        <div className="booking-row">
          <div>
            <h4>Professional Camera Kit</h4>
            <p>Requested by Student · Oct 29</p>
          </div>
          <div className="request-actions">
            <button className="approve-button">Approve</button>
            <button className="reject-button">Reject</button>
          </div>
        </div>

        <div className="booking-row">
          <div>
            <h4>Advanced Computing Lab</h4>
            <p>Requested by Student · Oct 30</p>
          </div>
          <div className="request-actions">
            <button className="approve-button">Approve</button>
            <button className="reject-button">Reject</button>
          </div>
        </div>
      </section>

      <section className="dashboard-section">
        <h3>My resources</h3>

        <div className="booking-row">
          <div>
            <h4>Professional Camera Kit</h4>
            <p>Media Center · Available</p>
          </div>
          <span className="status approved">Listed</span>
        </div>

        <div className="booking-row">
          <div>
            <h4>Advanced Computing Lab</h4>
            <p>Block A · Room 204</p>
          </div>
          <span className="status approved">Listed</span>
        </div>
      </section>
    </main>
  );
}
