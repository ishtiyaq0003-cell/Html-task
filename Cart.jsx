import { useState } from "react";           // ← useState imported
import { Link } from "react-router-dom";

// Initial cart data (static starting point)
const initialCartItems = [
  { id: 1, name: "Classic Smash Burger", size: "Large",   extras: "Extra Cheese", price: 430, qty: 2, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop" },
  { id: 2, name: "Loaded Cheese Fries",  size: "Regular", extras: "—",            price: 220, qty: 1, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=200&fit=crop" },
  { id: 3, name: "Oreo Milkshake",       size: "Regular", extras: "—",            price: 220, qty: 2, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&h=200&fit=crop" },
];

function Cart() {
  
  // cartItems state holds the full list; changing qty here re-renders the UI
  const [cartItems, setCartItems] = useState(initialCartItems);

  // promoCode state: tracks what the user types in the promo input
  const [promoCode, setPromoCode] = useState("");

  // promoApplied state: becomes true when a valid code is submitted
  const [promoApplied, setPromoApplied] = useState(false);

  // ─── HANDLERS ─────────────────────────────────────────────────────────────

  // handleIncrement: finds the item by id and adds 1 to its qty
  // From your Product.jsx pattern:  setProductQuantity(productQuantity + 1)
  // Here we do the same but inside the array using .map()
  function handleIncrement(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  // handleDecrement: subtracts 1 from qty, but never goes below 1
  function handleDecrement(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
      )
    );
  }

  // handleRemove: filters out the item with this id from the cart
  function handleRemove(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  // handlePromoChange: controlled input — same pattern as your Login handleChange
  // updates promoCode state as the user types
  function handlePromoChange(e) {
    setPromoCode(e.target.value);
  }

  // handleApplyPromo: checks if code is valid and sets promoApplied
  function handleApplyPromo() {
    if (promoCode.trim().toUpperCase() === "WELCOME20") {
      setPromoApplied(true);
    } else {
      alert("Invalid promo code. Try WELCOME20");
    }
  }

  // ─── DERIVED VALUES (recalculate live whenever cartItems changes) ──────────
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.2) : 0;
  const delivery = 80;
  const total    = subtotal - discount + delivery;

  // ─── RENDER ───────────────────────────────────────────────────────────────
  return (
    <div>
      <h2 className="fw-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <p className="fs-4 fw-bold text-muted">Your cart is empty!</p>
          <Link to="/app/menu" className="btn fw-bold mt-2" style={{ background: "#f5a623", color: "#1a1a1a" }}>
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="row g-4">

          {/* ── Cart Items ── */}
          <div className="col-md-7">
            {/* .map() renders each cart item — same pattern as your Footer.jsx */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex gap-3 align-items-center p-3 rounded-4 mb-3"
                style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                {/* Food image */}
                <div className="rounded-3 flex-shrink-0 overflow-hidden" style={{ width: "64px", height: "64px" }}>
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>

                {/* Name + price */}
                <div className="flex-grow-1">
                  <h6 className="fw-bold mb-0">{item.name}</h6>
                  <p className="text-muted small mb-0">{item.size} · {item.extras}</p>
                  <span className="fw-bold small" style={{ color: "#f5a623" }}>Rs. {item.price}</span>
                </div>

                {/* Quantity controls — useState increment/decrement from your Product.jsx */}
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-sm rounded-3"
                    style={{ background: "#f5f5f5" }}
                    onClick={() => handleDecrement(item.id)}
                  >−</button>

                  <span className="fw-bold">{item.qty}</span>

                  <button
                    className="btn btn-sm rounded-3"
                    style={{ background: "#f5a623", color: "#1a1a1a" }}
                    onClick={() => handleIncrement(item.id)}
                  >+</button>
                </div>

                {/* Remove button */}
                <button
                  className="btn btn-sm text-muted"
                  onClick={() => handleRemove(item.id)}
                >✕</button>
              </div>
            ))}

            {/* ── Promo Code — controlled input like your Login.jsx ── */}
            <div className="p-3 rounded-4 mt-2" style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h6 className="fw-bold mb-2">🏷️ Promo Code</h6>
              {promoApplied ? (
                <p className="text-success fw-bold mb-0">✅ WELCOME20 applied! 20% discount added.</p>
              ) : (
                <div className="d-flex gap-2">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Enter code (e.g. WELCOME20)"
                    value={promoCode}
                    onChange={handlePromoChange}
                  />
                  <button
                    className="btn fw-bold px-4 rounded-3"
                    style={{ background: "#1a1a1a", color: "white" }}
                    onClick={handleApplyPromo}
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ── Order Summary — values update live as qty changes ── */}
          <div className="col-md-5">
            <div className="p-4 rounded-4 sticky-top" style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", top: "20px" }}>
              <h5 className="fw-bold mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2 small">
                <span className="text-muted">Subtotal</span>
                <span>Rs. {subtotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-2 small">
                <span className="text-muted">Promo Discount</span>
                <span className="text-success">− Rs. {discount}</span>
              </div>
              <div className="d-flex justify-content-between mb-3 small">
                <span className="text-muted">Delivery Fee</span>
                <span>Rs. {delivery}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total</span>
                <span style={{ color: "#f5a623" }}>Rs. {total}</span>
              </div>
              <Link
                to="/app/checkout"
                className="btn w-100 fw-bold py-2 rounded-3 mt-4"
                style={{ background: "#f5a623", color: "#1a1a1a" }}
              >
                Proceed to Checkout →
              </Link>
              <Link to="/app/menu" className="btn btn-outline-secondary w-100 rounded-3 mt-2">
                Add More Items
              </Link>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;
