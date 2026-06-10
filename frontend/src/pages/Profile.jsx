import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Profile() {
  const [activeTab, setActiveTab] = useState("Overview");

  const stats = [
    { label: "FAQs Created", value: "128", icon: "💬" },
    { label: "FAQs Edited", value: "215", icon: "✏️" },
    { label: "Answers Submitted", value: "342", icon: "📤" },
    { label: "Comments Added", value: "186", icon: "🗨️" },
    { label: "Total Views", value: "24.6K", icon: "👁️" },
    { label: "Helpful Votes", value: "1.2K", icon: "👍" },
  ];

  const tabs = [
    { label: "Overview", icon: "⊞" },
    { label: "My Content", icon: "📄" },
    { label: "Analytics", icon: "📊" },
    { label: "Badges", icon: "🏅" },
    { label: "Account Settings", icon: "⚙️" },
  ];

  const recentContent = [
    { title: "How to Reset Password", status: "Published", views: "1.2K", votes: 45 },
    { title: "Two Factor Authentication Setup", status: "Published", views: "980", votes: 38 },
    { title: "Integrating API with Python", status: "Draft", views: null, votes: null },
    { title: "Rate Limiting Best Practices", status: "Published", views: "760", votes: 25 },
    { title: "Webhook Verification Guide", status: "Draft", views: null, votes: null },
  ];

  const badges = [
    { label: "Top Contributor", color: "#7C3AED" },
    { label: "Expert", color: "#2563EB" },
    { label: "AI/ML Guru", color: "#059669" },
    { label: "Hot Question", color: "#D97706" },
    { label: "Sharp Shooter", color: "#DC2626" },
  ];

  const recentActivity = [
    { text: 'Answered "Best roadmap for AI/ML in 2026?"', time: "2 days ago", color: "#2563EB" },
    { text: 'Asked "When should I use recursion vs iteration?"', time: "1 week ago", color: "#D97706" },
    { text: 'Earned the "Sharpshooter" badge', time: "Feb 15, 2025", color: "#059669" },
  ];

  const quickLinks = [
    { label: "My FAQs", count: 128 },
    { label: "Draft FAQs", count: 18 },
    { label: "Published FAQs", count: 110 },
    { label: "Bookmarked FAQs", count: 56 },
    { label: "Recently Viewed", count: 20 },
  ];

  const analyticsData = [
    { label: "Profile Views", value: "1.8K", change: "+18%" },
    { label: "FAQ Views", value: "9.6K", change: "+24%" },
    { label: "Search Appearances", value: "3.2K", change: "+12%" },
    { label: "Answer Acceptances Rate", value: "87%", change: "+8%" },
  ];

  return (
    <>
      <Sidebar />

      <div className="main-wrapper">
        <Topbar />

        <main className="content">

          {/* ── Profile Header ── */}
          <section className="profile-header-card">
            <div className="profile-header-left">

              {/* Avatar with edit pencil */}
              <div className="profile-avatar-wrapper">
                <img
                  src="https://i.pravatar.cc/150?img=47"
                  alt="Anwesha Ghosh"
                  className="profile-avatar-img"
                />
                <button className="avatar-edit-btn" aria-label="Edit photo">
                  ✏️
                </button>
              </div>

              {/* Info block */}
              <div className="profile-user-info">
                <div className="profile-name-row">
                  <h2 className="profile-name">Anwesha Ghosh</h2>
                  <span className="profile-pro-badge">Pro</span>
                </div>

                <p className="profile-handle">@anwesha</p>
                <p className="profile-title">Product Designer at CrowdFAQ</p>

                <div className="profile-meta">
                  <span>📍 Bangalore, India</span>
                  <span>👥 Design Team</span>
                </div>

                <p className="profile-bio">
                  I love building user friendly products and sharing knowledge
                  with the community.
                </p>

                <a href="mailto:anwesha@crowdfaq.com" className="profile-email-link">
                  ✉️ anwesha@crowdfaq.com
                </a>
              </div>
            </div>

            {/* Right: account details */}
            <div className="profile-header-right">
              <button className="edit-profile-btn">✏️ Edit Profile</button>

              <div className="profile-details-grid">
                <div className="profile-detail-row">
                  <span className="detail-label">Username</span>
                  <span className="detail-value">@anwesha</span>
                </div>
                <div className="profile-detail-row">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">anwesha@crowdfaq.com</span>
                </div>
                <div className="profile-detail-row">
                  <span className="detail-label">Role</span>
                  <span className="detail-value">Product Designer</span>
                </div>
                <div className="profile-detail-row">
                  <span className="detail-label">Organization</span>
                  <span className="detail-value">CrowdFAQ Inc.</span>
                </div>
                <div className="profile-detail-row">
                  <span className="detail-label">Member since</span>
                  <span className="detail-value">Jan 15, 2024</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Stats Row ── */}
          <section className="profile-stats-row">
            {stats.map((item) => (
              <div key={item.label} className="profile-stat-card">
                <div className="stat-icon">{item.icon}</div>
                <div className="stat-text">
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </section>

          {/* ── Tabs ── */}
          <section className="profile-tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                className={`profile-tab-btn ${activeTab === tab.label ? "active" : ""}`}
                onClick={() => setActiveTab(tab.label)}
              >
                <span className="tab-icon">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </section>

          {/* ── Overview Tab ── */}
          {activeTab === "Overview" && (
            <div className="overview-layout">

              {/* TOP ROW */}
              <div className="overview-top-row">

                {/* Recent Content */}
                <div className="recent-content-card profile-card">
                  <div className="card-header-row">
                    <h3>Recent Content</h3>
                    <button className="view-all-btn">View all</button>
                  </div>

                  <table className="content-table">
                    <tbody>
                      {recentContent.map((item) => (
                        <tr key={item.title} className="content-table-row">
                          <td className="content-table-icon">📄</td>
                          <td className="content-table-title">
                            {item.title}
                            <span
                              className={`content-status ${
                                item.status === "Published"
                                  ? "status-published"
                                  : "status-draft"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="content-table-stat">
                            {item.views ? (
                              <span>👁️ {item.views}</span>
                            ) : (
                              <span className="stat-empty">—</span>
                            )}
                          </td>
                          <td className="content-table-stat">
                            {item.votes !== null ? (
                              <span>👍 {item.votes}</span>
                            ) : (
                              <span className="stat-empty">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Right Column */}
                <div className="overview-right-column">

                  {/* Top FAQ */}
                  <div className="top-faq-card profile-card">
                    <div className="card-header-row">
                      <h3>Top FAQ <span className="card-subhead">(by views)</span></h3>
                      <button className="view-all-btn">View all</button>
                    </div>

                    <div className="top-faq-item">
                      <div className="top-faq-icon">🏆</div>
                      <div className="top-faq-text">
                        <p className="top-faq-title">API Authentication Guide</p>
                        <p className="top-faq-sub">Your most viewed FAQ</p>
                      </div>
                      <div className="top-faq-views">
                        <span className="top-faq-num">2.5K</span>
                        <span className="top-faq-label">Views</span>
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="badges-card profile-card">
                    <div className="card-header-row">
                      <h3>Badges</h3>
                      <button className="view-all-btn">View all</button>
                    </div>

                    <div className="badges-icon-row">
                      {badges.map((b) => (
                        <div key={b.label} className="badge-icon-item">
                          <div
                            className="badge-circle"
                            style={{ borderColor: b.color, color: b.color }}
                          >
                            🏅
                          </div>
                          <span className="badge-icon-label">{b.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* BOTTOM ROW */}
              <div className="overview-bottom-row">

                {/* Analytics */}
                <div className="analytics-card profile-card">
                  <div className="card-header-row">
                    <h3>Analytics Overview</h3>
                    <select className="analytics-period-select">
                      <option>Last 30 days</option>
                      <option>Last 7 days</option>
                      <option>Last 90 days</option>
                    </select>
                  </div>

                  <div className="analytics-grid">
                    {analyticsData.map((a) => (
                      <div key={a.label} className="analytics-box">
                        <span className="analytics-label">{a.label}</span>
                        <strong className="analytics-value">{a.value}</strong>
                        <span className="analytics-change positive">{a.change}</span>
                        {/* Sparkline placeholder */}
                        <svg className="sparkline" viewBox="0 0 80 24" fill="none">
                          <polyline
                            points="0,20 15,14 30,16 45,8 60,10 80,4"
                            stroke="#2563EB"
                            strokeWidth="1.5"
                            fill="none"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="activity-card profile-card">
                  <div className="card-header-row">
                    <h3>Recent Activity</h3>
                    <button className="view-all-btn">View all</button>
                  </div>

                  <ul className="activity-list">
                    {recentActivity.map((a, i) => (
                      <li key={i} className="activity-item">
                        <span
                          className="activity-dot"
                          style={{ background: a.color }}
                        />
                        <div className="activity-text">
                          <p>{a.text}</p>
                          <span className="activity-time">{a.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Links */}
                <div className="quick-links-card profile-card">
                  <h3>Quick Links</h3>

                  <div className="quick-links">
                    {quickLinks.map((link) => (
                      <button key={link.label} className="quick-link-row">
                        <span className="quick-link-icon">📄</span>
                        <span className="quick-link-label">{link.label}</span>
                        <span className="quick-link-count">{link.count}</span>
                        <span className="quick-link-arrow">›</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {activeTab !== "Overview" && (
            <div className="profile-card">
              <h2>{activeTab}</h2>
              <p>Content for {activeTab} will be implemented here.</p>
            </div>
          )}

        </main>
      </div>
    </>
  );
}

export default Profile;
