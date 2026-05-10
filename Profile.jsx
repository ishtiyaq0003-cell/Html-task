function Profile() {
  const savedAddresses = [
    { tag: "Home",   addr: "Street 3, Kandikhel, Peshawar",   tagColor: "#f5a623" },
    { tag: "Work",   addr: "Setan, Near Shah Market",         tagColor: "#1a1a1a" },
  ];

  const favItems = [
    { img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop", name: "Classic Smash Burger" },
    { img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=200&fit=crop", name: "Loaded Cheese Fries"  },
    { img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&h=200&fit=crop", name: "Oreo Milkshake"       },
  ];

  return (
    <div>
      <h2 className="fw-bold mb-4">My Profile</h2>

      <div className="row g-4">

        {/* Profile Card */}
        <div className="col-md-4">
          <div
            className="p-4 rounded-4 text-center h-100"
            style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
          >
            <div
              className="rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3 overflow-hidden"
              style={{ width: "90px", height: "90px", background: "#fff8ec", fontSize: "48px" }}
            >
             👦🏻
            </div>
            <h5 className="fw-bold mb-0">Ishtiaq Ahmed</h5>
            <p className="text-muted small">Ishtiyaq0003@gmail.com</p>
            <p className="text-muted small">📞 +92 3275838049</p>
            <p className="small mb-3" style={{ color: "#f5a623" }}>⭐ Loyal Member since Jan 2026</p>
            <button
              className="btn w-100 fw-bold rounded-3"
              style={{ background: "#1a1a1a", color: "white" }}
            >
              Edit Profile
            </button>
          </div>
        </div>

        <div className="col-md-8 d-flex flex-column gap-4">

          {/* Stats */}
          <div
            className="p-4 rounded-4"
            style={{ background: "#1a1a1a", color: "white" }}
          >
            <h6 className="fw-bold mb-3">📊 My Stats</h6>
            <div className="row text-center">
              {[
                { label: "Total Orders",   value: "28"       },
                { label: "Total Spent",    value: "Rs. 18.4k" },
                { label: "Fav Item",       value: "🍔 Burger" },
                { label: "Loyalty Points", value: "1,240 pts" },
              ].map((s, i) => (
                <div className="col-6 col-md-3 mb-3 mb-md-0" key={i}>
                  <h5 className="fw-bold mb-0" style={{ color: "#f5a623" }}>{s.value}</h5>
                  <small className="text-white-50">{s.label}</small>
                </div>
              ))}
            </div>
          </div>

          {/* Saved Addresses */}
          <div
            className="p-4 rounded-4"
            style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
          >
            <h6 className="fw-bold mb-3">📍 Saved Addresses</h6>
            <div className="d-flex flex-column gap-2">
              {savedAddresses.map((a, i) => (
                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center p-3 rounded-3"
                  style={{ background: "#f9f9f9" }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <span
                      className="badge rounded-pill px-3"
                      style={{ background: a.tagColor }}
                    >
                      {a.tag}
                    </span>
                    <span className="small">{a.addr}</span>
                  </div>
                  <button className="btn btn-sm btn-outline-secondary rounded-3">Edit</button>
                </div>
              ))}
            </div>
            <button className="btn btn-sm mt-3 rounded-3" style={{ background: "#fff8ec", color: "#f5a623", border: "1.5px dashed #f5a623" }}>
              + Add New Address
            </button>
          </div>

          {/* Favourites */}
          <div
            className="p-4 rounded-4"
            style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
          >
            <h6 className="fw-bold mb-3">❤️ My Favourites</h6>
            <div className="d-flex gap-3">
              {favItems.map((fav, i) => (
                <div
                  key={i}
                  className="text-center p-2 rounded-3 flex-grow-1 overflow-hidden"
                  style={{ background: "#fff8ec" }}
                >
                  <div style={{ height: "80px", borderRadius: "10px", overflow: "hidden", marginBottom: "8px" }}>
                    <img
                      src={fav.img}
                      alt={fav.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <p className="small fw-bold mb-0">{fav.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;