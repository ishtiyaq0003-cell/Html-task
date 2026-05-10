import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div style={{ maxWidth: "680px", margin: "0 auto" }}>
      <h2 className="fw-bold mb-4">📋 Checkout</h2>

      {/* Delivery Address */}
      <div className="p-4 rounded-4 mb-4" style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
        <h6 className="fw-bold mb-3">📍 Delivery Address</h6>
        <div className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control rounded-3" placeholder="Full Name" />
          </div>
          <div className="col-md-6">
            <input type="tel" className="form-control rounded-3" placeholder="Phone Number" />
          </div>
          <div className="col-12">
            <input type="text" className="form-control rounded-3" placeholder="Street Address" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control rounded-3" placeholder="City" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control rounded-3" placeholder="Landmark (Optional)" />
          </div>
        </div>
      </div>

      {/* Delivery Time */}
      <div className="p-4 rounded-4 mb-4" style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
        <h6 className="fw-bold mb-3">🕐 Delivery Time</h6>
        <div className="d-flex gap-3">
          <button
            className="btn fw-bold px-4 rounded-3"
            style={{ background: "#f5a623", color: "#1a1a1a" }}
          >
            ASAP (~25 min)
          </button>
          <button className="btn btn-outline-secondary rounded-3">Schedule</button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="p-4 rounded-4 mb-4" style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
        <h6 className="fw-bold mb-3">💳 Payment Method</h6>
        <div className="d-flex flex-column gap-2">
          {["Cash on Delivery 💵", "Easypaisa / JazzCash 📱", "Credit / Debit Card 💳"].map((method, i) => (
            <label
              key={i}
              className="d-flex align-items-center gap-3 p-3 rounded-3"
              style={{ background: "#f9f9f9", border: "1.5px solid #eee", cursor: "pointer" }}
            >
              <input type="radio" name="payment" defaultChecked={i === 0} style={{ accentColor: "#f5a623" }} />
              <span className="fw-bold small">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="p-4 rounded-4 mb-4" style={{ background: "#1a1a1a", color: "white" }}>
        <h6 className="fw-bold mb-3">🧾 Order Summary</h6>
        <div className="d-flex justify-content-between small mb-1">
          <span className="text-white-50">Smash Burger x2</span><span>Rs. 860</span>
        </div>
        <div className="d-flex justify-content-between small mb-1">
          <span className="text-white-50">Cheese Fries x1</span><span>Rs. 220</span>
        </div>
        <div className="d-flex justify-content-between small mb-1">
          <span className="text-white-50">Milkshake x2</span><span>Rs. 440</span>
        </div>
        <hr style={{ borderColor: "#333" }} />
        <div className="d-flex justify-content-between fw-bold">
          <span>Total Payable</span>
          <span style={{ color: "#f5a623" }}>Rs. 1,320</span>
        </div>
      </div>

      <button
        className="btn w-100 fw-bold py-3 rounded-3 fs-5"
        style={{ background: "#f5a623", color: "#1a1a1a" }}
      >
        Place Order 🎉
      </button>
    </div>
  );
}

export default Checkout;
