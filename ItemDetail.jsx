import { Link, useParams } from "react-router-dom";

// Map of item IDs to images
const itemImages = {
  1:  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=500&fit=crop",
  2:  "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&h=500&fit=crop",
  3:  "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=500&fit=crop",
  4:  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop",
  5:  "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&h=500&fit=crop",
  6:  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=500&fit=crop",
  7:  "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=500&fit=crop",
  8:  "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=500&fit=crop",
  9:  "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=500&fit=crop",
  10: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&h=500&fit=crop",
  11: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=500&fit=crop",
  12: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&h=500&fit=crop",
  13: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=800&h=500&fit=crop",
  14: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=500&fit=crop",
  15: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800&h=500&fit=crop",
  16: "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?w=800&h=500&fit=crop",
};

function ItemDetail() {
  const { itemId } = useParams();

  // In a real app this would be fetched by itemId
  const item = {
    name: "Classic Smash Burger",
    img: itemImages[parseInt(itemId)] || itemImages[1],
    price: 380,
    rating: "4.9",
    reviews: 1240,
    cal: "520 kcal",
    desc: "Two smashed beef patties, American cheese, caramelized onions, pickles, special house sauce, all in a toasted brioche bun. A crowd favourite since day one.",
    extras: [
      { label: "Extra Cheese",     price: 50  },
      { label: "Extra Patty",      price: 120 },
      { label: "Jalapenos",        price: 30  },
      { label: "Bacon Strip",      price: 80  },
    ],
    sizes: ["Regular", "Large", "Double"],
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <Link to="/app/menu" className="btn btn-sm btn-outline-secondary rounded-3 mb-4">
        ← Back to Menu
      </Link>

      {/* Item Hero - real image */}
      <div
        className="rounded-4 overflow-hidden mb-4"
        style={{ height: "280px" }}
      >
        <img
          src={item.img}
          alt={item.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <h2 className="fw-bold mb-1">{item.name}</h2>
      <p className="text-muted small mb-3">
        ⭐ {item.rating} ({item.reviews} reviews) &nbsp;·&nbsp; {item.cal}
      </p>
      <p className="text-muted mb-4">{item.desc}</p>

      {/* Size Selection */}
      <h6 className="fw-bold mb-2">Choose Size</h6>
      <div className="d-flex gap-2 mb-4">
        {item.sizes.map((size, i) => (
          <button
            key={i}
            className="btn rounded-3 fw-bold"
            style={{
              background: i === 0 ? "#f5a623" : "white",
              color: i === 0 ? "#1a1a1a" : "#555",
              border: "1.5px solid #ddd",
            }}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Extras */}
      <h6 className="fw-bold mb-2">Add Extras</h6>
      <div className="d-flex flex-column gap-2 mb-4">
        {item.extras.map((extra, i) => (
          <div
            key={i}
            className="d-flex justify-content-between align-items-center p-3 rounded-3"
            style={{ background: "white", border: "1.5px solid #eee" }}
          >
            <span className="small fw-bold">{extra.label}</span>
            <div className="d-flex align-items-center gap-3">
              <span className="text-muted small">+ Rs. {extra.price}</span>
              <input type="checkbox" className="form-check-input" style={{ accentColor: "#f5a623" }} />
            </div>
          </div>
        ))}
      </div>

      {/* Quantity & Add to Cart */}
      <div className="d-flex align-items-center gap-3 mt-2">
        <div className="d-flex align-items-center gap-3 border rounded-3 px-3 py-2">
          <button className="btn btn-sm p-0 fw-bold" style={{ color: "#f5a623" }}>−</button>
          <span className="fw-bold">1</span>
          <button className="btn btn-sm p-0 fw-bold" style={{ color: "#f5a623" }}>+</button>
        </div>
        <Link
          to="/app/cart"
          className="btn flex-grow-1 fw-bold py-2 rounded-3"
          style={{ background: "#1a1a1a", color: "white" }}
        >
          Add to Cart — Rs. {item.price}
        </Link>
      </div>
    </div>
  );
}

export default ItemDetail;
