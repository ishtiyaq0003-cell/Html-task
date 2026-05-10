import { useState } from "react";           // ← useState imported
import { Link } from "react-router-dom";

function Login() {
  // Single state object holds both fields — same pattern as your Login.jsx snippet
  // { email: "", password: "" } mirrors your { username: "", password: "" }
  const [data, setData] = useState({ email: "", password: "" });

  // handleChange: one function handles ALL inputs using e.target.name
  // Destructures name and value from the input element that fired the event
  // Uses spread (...prevData) to keep old fields while updating just the changed one
  // This is exactly your pattern:  const { name, value } = e.target;
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  // handleSubmit: reads the final state values when form is submitted
  function handleSubmit(e) {
    e.preventDefault();   // stops the page from refreshing
    console.log("Logging in with:", data.email, data.password);
    // In a real app you'd call an API here with data.email and data.password
    alert(`Welcome back! Logged in as: ${data.email}`);
  }


  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "#1a1a1a" }}
    >
      <div
        className="card border-0 rounded-4 p-5"
        style={{ width: "420px", background: "#2a2a2a", color: "white" }}
      >
        <div className="text-center mb-4">
          <div style={{ fontSize: "52px" }}>🔥</div>
          <h3 className="fw-bold mt-2" style={{ color: "#f5a623" }}>BURGERHOUSE</h3>
          <p className="text-white-50 small">Welcome back! Log in to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white-50 small">Email Address</label>
            <input
              type="email"
              name="email"                          // ← name must match the key in state
              className="form-control bg-dark text-white border-secondary rounded-3"
              placeholder="you@example.com"
              value={data.email}                    // ← controlled: value comes from state
              onChange={handleChange}               // ← controlled: updates state on every keystroke
              required
            />
          </div>

          <div className="mb-2">
            <label className="form-label text-white-50 small">Password</label>
            <input
              type="password"
              name="password"                       // ← name must match the key in state
              className="form-control bg-dark text-white border-secondary rounded-3"
              placeholder="••••••••"
              value={data.password}                 // ← controlled: value comes from state
              onChange={handleChange}               // ← same handler, different field
              required
            />
          </div>

          {/* Live preview (for learning — shows state updating in real time) */}
          {(data.email || data.password) && (
            <p className="text-white-50 small mt-2 mb-0">
              Typing as: <span style={{ color: "#f5a623" }}>{data.email || "..."}</span>
            </p>
          )}

          <div className="text-end mb-4 mt-2">
            <a href="#" style={{ color: "#f5a623", fontSize: "13px" }}>Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="btn w-100 fw-bold py-2 rounded-3"
            style={{ background: "#f5a623", color: "#1a1a1a" }}
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-white-50 small mb-0">
          New here?{" "}
          <Link to="/register" style={{ color: "#f5a623" }}>
            Create a free account
          </Link>
        </p>

        <div className="text-center mt-3">
          <Link to="/" className="small" style={{ color: "#555" }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

