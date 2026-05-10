function Offers() {
  const deals = [
    {
      emoji: "🍔🍟🥤",
      title: "Combo Meal Deal",
      desc: "Any burger + fries + drink for a flat price. Mix and match your favourites.",
      price: "Rs. 650",
      original: "Rs. 950",
      code: "COMBO650",
      expiry: "Valid till May 31",
      tag: "Most Popular",
      tagColor: "#f5a623",
    },
    {
      emoji: "🎉",
      title: "New User Special",
      desc: "First order discount for new accounts. 20% off on any order above Rs. 500.",
      price: "20% OFF",
      original: null,
      code: "WELCOME20",
      expiry: "One-time use",
      tag: "New Users",
      tagColor: "#28a745",
    },
    {
      emoji: "🍕🍕",
      title: "Buy 1 Get 1 Pizza",
      desc: "Order any large pizza and get a medium pizza absolutely free. Weekends only.",
      price: "FREE Pizza",
      original: null,
      code: "BOGO",
      expiry: "Saturdays & Sundays",
      tag: "Weekend Deal",
      tagColor: "#dc3545",
    },
    {
      emoji: "🌙",
      title: "Late Night Special",
      desc: "Order after 10 PM and get free delivery + 10% off your total. Every night.",
      price: "10% OFF + Free Delivery",
      original: null,
      code: "NIGHT10",
      expiry: "10 PM – 2 AM daily",
      tag: "Night Owl",
      tagColor: "#6f42c1",
    },
  ];

  return (
    <div>
      <h2 className="fw-bold mb-1">🏷️ Today's Offers</h2>
      <p className="text-muted mb-4">Apply codes at checkout to save big!</p>

      <div className="row g-4">
        {deals.map((deal, i) => (
          <div className="col-md-6" key={i}>
            <div
              className="p-4 rounded-4 h-100"
              style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: "1.5px solid #f0f0f0" }}
            >
              <div className="d-flex justify-content-between align-items-start mb-3">
                <span style={{ fontSize: "40px" }}>{deal.emoji}</span>
                <span
                  className="badge px-3 py-2 rounded-pill"
                  style={{ background: deal.tagColor, fontSize: "11px" }}
                >
                  {deal.tag}
                </span>
              </div>

              <h5 className="fw-bold mb-1">{deal.title}</h5>
              <p className="text-muted small mb-3">{deal.desc}</p>

              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="fw-bold fs-5" style={{ color: "#f5a623" }}>{deal.price}</span>
                {deal.original && (
                  <span className="text-muted small text-decoration-line-through">{deal.original}</span>
                )}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="px-3 py-1 rounded-3 fw-bold small"
                  style={{ background: "#fff8ec", color: "#f5a623", border: "1.5px dashed #f5a623", letterSpacing: "2px" }}
                >
                  {deal.code}
                </div>
                <span className="text-muted small">📅 {deal.expiry}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;