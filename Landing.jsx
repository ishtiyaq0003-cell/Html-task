import { Link } from "react-router-dom";

function Landing() {
  const topPicks = [
    { img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop", name: "Smash Burger", tag: "Bestseller" },
    { img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop", name: "BBQ Pizza", tag: "New" },
    { img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop", name: "Beef Tacos", tag: "Spicy 🔥" },
    { img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=400&fit=crop", name: "Crispy Wings", tag: "Popular" },
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark px-4 py-3" style={{ background: "#1a1a1a" }}>
        <Link to="/" className="navbar-brand fw-bold fs-3" style={{ color: "#f5a623", letterSpacing: "2px" }}>
          🔥  BURGERHOUSE
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto ms-4 gap-2">
            <li className="nav-item">
              <Link to="/app/menu" className="nav-link text-white-50">Menu</Link>
            </li>
            <li className="nav-item">
              <Link to="/app/offers" className="nav-link text-white-50">Offers</Link>
            </li>
            <li className="nav-item">
              <Link to="/app/orders" className="nav-link text-white-50">Track Order</Link>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <Link to="/login" className="btn btn-outline-warning">Login</Link>
            <Link to="/register" className="btn btn-warning fw-bold text-dark">Sign Up Free</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="d-flex align-items-center"
        style={{
          minHeight: "88vh",
          background: "linear-gradient(120deg, #1a1a1a 55%, #f5a623 55%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-white">
              <p className="text-warning fw-bold mb-2" style={{ letterSpacing: "3px", fontSize: "13px" }}>
                🚀 30-MINUTE DELIVERY GUARANTEED
              </p>
              <h1 className="display-3 fw-bold lh-1 mb-3">
                Cravings? <br />
                <span style={{ color: "#f5a623" }}>We've Got</span> <br />
                You Covered.
              </h1>
              <p className="text-white-50 mb-4" style={{ fontSize: "17px" }}>
                Hot, fresh, and straight to your door. Real ingredients, real flavors — no compromises.
              </p>
              <div className="d-flex gap-3">
                <Link to="/app/menu" className="btn btn-warning btn-lg fw-bold px-4 text-dark">
                  Order Now →
                </Link>
                <Link to="/app/offers" className="btn btn-outline-light btn-lg px-4">
                  See Deals
                </Link>
              </div>
              <div className="d-flex gap-4 mt-5">
                <div>
                  <h4 className="fw-bold text-warning mb-0">50+</h4>
                  <small className="text-white-50">Menu Items</small>
                </div>
                <div>
                  <h4 className="fw-bold text-warning mb-0">4.9 ⭐</h4>
                  <small className="text-white-50">App Rating</small>
                </div>
                <div>
                  <h4 className="fw-bold text-warning mb-0">10k+</h4>
                  <small className="text-white-50">Happy Customers</small>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center d-none d-md-block">
              <div style={{ borderRadius: "50%", overflow: "hidden", width: "380px", height: "380px", margin: "0 auto", boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop"
                  alt="Smash Burger"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks */}
      <section className="py-5" style={{ background: "#f8f8f8" }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-1">Today's Top Picks</h2>
          <p className="text-center text-muted mb-5">Loved by thousands of customers every day</p>
          <div className="row g-4">
            {topPicks.map((item, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div
                  className="card border-0 text-center h-100 rounded-4 overflow-hidden"
                  style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", cursor: "pointer" }}
                >
                  <div style={{ height: "160px", overflow: "hidden" }}>
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s" }}
                      onMouseOver={e => e.target.style.transform = "scale(1.05)"}
                      onMouseOut={e => e.target.style.transform = "scale(1)"}
                    />
                  </div>
                  <div className="p-3">
                    <span
                      className="badge mb-1"
                      style={{ background: "#f5a623", color: "#1a1a1a", fontSize: "11px" }}
                    >
                      {item.tag}
                    </span>
                    <h6 className="fw-bold mt-1 mb-0">{item.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/app/menu" className="btn btn-dark btn-lg px-5 rounded-pill">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5" style={{ background: "#1a1a1a", color: "white" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-1">How It Works</h2>
          <p className="text-white-50 mb-5">Three simple steps to delicious food</p>
          <div className="row g-4">
            {[
              { step: "01", icon: "📱", title: "Browse Menu", desc: "Pick from 50+ freshly made items across all categories" },
              { step: "02", icon: "🛒", title: "Add to Cart", desc: "Customize your order exactly the way you like it" },
              { step: "03", icon: "🚴", title: "Fast Delivery", desc: "We deliver hot to your door in under 30 minutes" },
            ].map((s, i) => (
              <div className="col-md-4" key={i}>
                <div className="p-4 rounded-4" style={{ background: "#2a2a2a" }}>
                  <p style={{ color: "#f5a623", fontSize: "13px", letterSpacing: "2px" }}>{s.step}</p>
                  <div style={{ fontSize: "48px" }}>{s.icon}</div>
                  <h5 className="fw-bold mt-3 mb-2">{s.title}</h5>
                  <p className="text-white-50 mb-0 small">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center" style={{ background: "#f5a623" }}>
        <div className="container">
          <h2 className="fw-bold text-dark display-5">First order? Get 20% OFF! 🎉</h2>
          <p className="text-dark mb-4">Use code <strong>WELCOME20</strong> at checkout. Limited time only.</p>
          <Link to="/register" className="btn btn-dark btn-lg px-5 fw-bold rounded-pill">
            Claim My Discount
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4" style={{ background: "#111", color: "#666" }}>
        <p className="mb-0 small">© 2026 BurgerHouse. Made with 🔥 for food lovers.</p>
      </footer>

    </div>
  );
}

export default Landing;
