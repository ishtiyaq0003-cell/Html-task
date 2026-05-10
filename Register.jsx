import { useState } from "react";           // ← useState imported
import { Link } from "react-router-dom";

function Register() {
  // ─── STATE ───────────────────────────────────────────────────────────────
  // One state object for ALL form fields — same pattern as your Login.jsx snippet
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  // ─── HANDLER ──────────────────────────────────────────────────────────────
  // handleChange works for every input — reads e.target.name to know which field to update
  // Spreads previous state and only changes the one field that fired the event
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  // handleSubmit: reads all fields from state on form submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Registering user:", data);
    alert(`Account created for ${data.firstName} ${data.lastName}! Check console for full data.`);
  }

  // ─── RENDER ───────────────────────────────────────────────────────────────
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "#1a1a1a" }}
    >
      <div
        className="card border-0 rounded-4 p-5"
        style={{ width: "440px", background: "#2a2a2a", color: "white" }}
      >
        <div className="text-center mb-4">
          <div style={{ fontSize: "52px" }}>🍔</div>
          <h3 className="fw-bold mt-2" style={{ color: "#f5a623" }}>Create Account</h3>
          <p className="text-white-50 small">Sign up and get 20% off your first order!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-3 mb-3">
            <div className="col">
              <input
                type="text"
                name="firstName"                    // ← matches state key
                className="form-control bg-dark text-white border-secondary rounded-3"
                placeholder="First Name"
                value={data.firstName}              // ← controlled
                onChange={handleChange}             // ← same handler for all fields
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="lastName"                     // ← matches state key
                className="form-control bg-dark text-white border-secondary rounded-3"
                placeholder="Last Name"
                value={data.lastName}               // ← controlled
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control bg-dark text-white border-secondary rounded-3"
              placeholder="Email Address"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              name="phone"
              className="form-control bg-dark text-white border-secondary rounded-3"
              placeholder="Phone Number"
              value={data.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="address"
              className="form-control bg-dark text-white border-secondary rounded-3"
              placeholder="Delivery Address"
              value={data.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              className="form-control bg-dark text-white border-secondary rounded-3"
              placeholder="Create Password"
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Live preview (for learning) */}
          {data.firstName && (
            <p className="text-white-50 small mb-3">
              Creating account for:{" "}
              <span style={{ color: "#f5a623" }}>{data.firstName} {data.lastName}</span>
            </p>
          )}

          <button
            type="submit"
            className="btn w-100 fw-bold py-2 rounded-3"
            style={{ background: "#f5a623", color: "#1a1a1a" }}
          >
            Create My Account 🎉
          </button>
        </form>

        <p className="text-center mt-4 text-white-50 small mb-0">
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#f5a623" }}>Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

