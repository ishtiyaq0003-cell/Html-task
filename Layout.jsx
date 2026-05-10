import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  const navLinks = [
    { to: "/app/home",     icon: "🏠", label: "Home"      },
    { to: "/app/menu",     icon: "🍽️", label: "Menu"      },
    { to: "/app/offers",   icon: "🏷️", label: "Offers"    },
    { to: "/app/cart",     icon: "🛒", label: "Cart"      },
    { to: "/app/orders",   icon: "📦", label: "My Orders" },
    { to: "/app/profile",  icon: "👤", label: "Profile"   },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="d-flex" style={{ minHeight: "100vh", background: "#f5f5f5" }}>

      {/* Sidebar */}
      <div
        className="d-flex flex-column py-4 px-3"
        style={{ width: "230px", minHeight: "100vh", background: "#1a1a1a", position: "sticky", top: 0 }}
      >
        <Link to="/" className="text-decoration-none text-center mb-4 d-block">
          <span style={{ fontSize: "28px" }}>🔥</span>
          <p className="fw-bold mb-0 mt-1" style={{ color: "#f5a623", letterSpacing: "2px", fontSize: "14px" }}>
            BURGERHOUSE
          </p>
        </Link>

        <hr style={{ borderColor: "#333" }} />

        <nav className="flex-grow-1 d-flex flex-column gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-decoration-none px-3 py-2 rounded-3 d-flex align-items-center gap-2"
              style={{
                background: isActive(link.to) ? "#f5a623" : "transparent",
                color: isActive(link.to) ? "#1a1a1a" : "#aaa",
                fontWeight: isActive(link.to) ? "700" : "400",
                fontSize: "15px",
                transition: "all 0.2s",
              }}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <hr style={{ borderColor: "#333" }} />

        <Link
          to="/login"
          className="text-decoration-none px-3 py-2 rounded-3 d-flex align-items-center gap-2"
          style={{ color: "#666", fontSize: "14px" }}
        >
          🚪 <span>Logout</span>
        </Link>
      </div>

      {/* Page Content */}
      <div className="flex-grow-1 p-4" style={{ overflowY: "auto" }}>
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;
