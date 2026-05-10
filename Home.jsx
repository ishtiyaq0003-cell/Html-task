import { Link } from "react-router-dom";

function Home() {
  const categories = [
    { img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop", name: "Burgers" },
    { img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop", name: "Pizza"   },
    { img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=200&h=200&fit=crop", name: "Tacos"   },
    { img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=200&h=200&fit=crop", name: "Chicken" },
    { img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=200&fit=crop", name: "Sides"   },
    { img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&h=200&fit=crop", name: "Drinks"  },
  ];

  const recentOrders = [
    { id: "#BH-2201", item: "Smash Burger + Fries", status: "Delivered",  color: "success", date: "May 9" },
    { id: "#BH-2198", item: "BBQ Pizza (Large)",    status: "On the Way", color: "warning", date: "May 10" },
  ];

  return (
    <div>
      {/* Greeting */}
      <div
        className="rounded-4 p-4 mb-4 d-flex justify-content-between align-items-center overflow-hidden"
        style={{ background: "#1a1a1a", color: "white", position: "relative" }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <h4 className="fw-bold mb-1">Hey, Ishtiaq 👋</h4>
          <p className="text-white-50 mb-0 small">What are you craving today?</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", border: "3px solid #f5a623" }}>
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop"
              alt="Burger"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <Link to="/Menu" className="btn fw-bold px-4" style={{ background: "#f5a623", color: "#1a1a1a" }}>
            Order Now
          </Link>
        </div>
      </div>

      {/* Active Order Banner */}
      <div
        className="rounded-4 p-3 mb-4 d-flex align-items-center gap-3"
        style={{ background: "#fff8ec", border: "1.5px solid #f5a623" }}
      >
        <span style={{ fontSize: "32px" }}>🚴</span>
        <div className="flex-grow-1">
          <p className="fw-bold mb-0 small">Your order #BH-2198 is on the way!</p>
          <p className="text-muted mb-0 small">Estimated arrival: 12 minutes</p>
        </div>
        <Link to="/app/orders" className="btn btn-sm btn-warning fw-bold">Track</Link>
      </div>

      {/* Categories */}
      <h5 className="fw-bold mb-3">Browse Categories</h5>
      <div className="row g-3 mb-4">
        {categories.map((cat, i) => (
          <div className="col-4 col-md-2" key={i}>
            <Link to="/app/menu" className="text-decoration-none">
              <div
                className="rounded-4 overflow-hidden text-center"
                style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", cursor: "pointer" }}
              >
                <div style={{ height: "70px", overflow: "hidden" }}>
                  <img
                    src={cat.img}
                    alt={cat.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <p className="mb-0 small fw-bold text-dark py-2 px-1">{cat.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <h5 className="fw-bold mb-3">Recent Orders</h5>
      <div className="d-flex flex-column gap-3">
        {recentOrders.map((o) => (
          <div
            key={o.id}
            className="rounded-4 p-3 d-flex justify-content-between align-items-center"
            style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
          >
            <div>
              <p className="fw-bold mb-0 small">{o.item}</p>
              <p className="text-muted mb-0 small">{o.id} · {o.date}</p>
            </div>
            <div className="d-flex flex-column align-items-end gap-1">
              <span className={`badge bg-${o.color}`}>{o.status}</span>
              <Link to="/app/orders" className="small" style={{ color: "#f5a623" }}>Details →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
