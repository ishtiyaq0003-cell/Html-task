import { Link } from "react-router-dom";

const orders = [
  {
    id: "#BH-2198",
    date: "May 10, 2026",
    items: "Classic Smash Burger x2, Loaded Cheese Fries, Oreo Milkshake x2",
    total: 1320,
    status: "On the Way",
    statusColor: "warning",
    eta: "~12 min",
    progress: 70,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop",
  },
  {
    id: "#BH-2201",
    date: "May 9, 2026",
    items: "BBQ Bacon Crunch, Pepsi Large",
    total: 600,
    status: "Delivered",
    statusColor: "success",
    eta: null,
    progress: 100,
    img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=200&h=200&fit=crop",
  },
  {
    id: "#BH-2185",
    date: "May 6, 2026",
    items: "Pepperoni Paradise (Large), Crispy Wings x6",
    total: 1170,
    status: "Delivered",
    statusColor: "success",
    eta: null,
    progress: 100,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop",
  },
];

function Orders() {
  return (
    <div>
      <h2 className="fw-bold mb-4">📦 My Orders</h2>

      <div className="d-flex flex-column gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-4 rounded-4"
            style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
          >
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex gap-3 align-items-center">
                <div style={{ width: "56px", height: "56px", borderRadius: "12px", overflow: "hidden", flexShrink: 0 }}>
                  <img
                    src={order.img}
                    alt="Order"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">{order.id}</h6>
                  <p className="text-muted small mb-0">📅 {order.date}</p>
                </div>
              </div>
              <span className={`badge bg-${order.statusColor} px-3 py-2`}>{order.status}</span>
            </div>

            <p className="text-muted small mb-3">{order.items}</p>

            {/* Progress bar for active orders */}
            {order.status !== "Delivered" && (
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <small className="text-muted">Order Confirmed → Preparing → On the Way</small>
                  <small style={{ color: "#f5a623" }}>ETA {order.eta}</small>
                </div>
                <div className="progress rounded-pill" style={{ height: "8px" }}>
                  <div
                    className="progress-bar"
                    style={{ width: `${order.progress}%`, background: "#f5a623" }}
                  ></div>
                </div>
              </div>
            )}

            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold" style={{ color: "#f5a623" }}>Rs. {order.total}</span>
              <div className="d-flex gap-2">
                {order.status === "Delivered" && (
                  <button
                    className="btn btn-sm fw-bold rounded-3"
                    style={{ background: "#1a1a1a", color: "white" }}
                  >
                    Reorder
                  </button>
                )}
                <button className="btn btn-sm btn-outline-secondary rounded-3">
                  View Receipt
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
