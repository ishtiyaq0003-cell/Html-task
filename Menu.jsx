import { Link } from "react-router-dom";

const menuData = [
  {
    category: "🍔 Burgers",
    items: [
      { id: 1,  name: "Classic Smash Burger",   price: 380, cal: "520 kcal", rating: "4.9", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
      { id: 2,  name: "Double Cheese Stacker",  price: 480, cal: "680 kcal", rating: "4.8", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop" },
      { id: 3,  name: "BBQ Bacon Crunch",        price: 520, cal: "730 kcal", rating: "4.7", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop" },
    ],
  },
  {
    category: "🍕 Pizzas",
    items: [
      { id: 4,  name: "Pepperoni Paradise",   price: 750, cal: "860 kcal", rating: "4.8", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" },
      { id: 5,  name: "BBQ Chicken Pizza",    price: 820, cal: "910 kcal", rating: "4.9", img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop" },
      { id: 6,  name: "Veggie Supreme",       price: 680, cal: "640 kcal", rating: "4.6", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop" },
    ],
  },
  {
    category: "🌮 Wraps & Tacos",
    items: [
      { id: 7,  name: "Grilled Chicken Wrap", price: 320, cal: "410 kcal", rating: "4.7", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop" },
      { id: 8,  name: "Beef Taco (x3)",       price: 350, cal: "490 kcal", rating: "4.8", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop" },
    ],
  },
  {
    category: "🍗 Chicken",
    items: [
      { id: 9,  name: "Crispy Wings (6pc)",    price: 420, cal: "560 kcal", rating: "4.9", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop" },
      { id: 10, name: "Popcorn Chicken Box",   price: 280, cal: "380 kcal", rating: "4.7", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop" },
    ],
  },
  {
    category: "🍟 Sides",
    items: [
      { id: 11, name: "Loaded Cheese Fries",   price: 220, cal: "420 kcal", rating: "4.8", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop" },
      { id: 12, name: "Onion Rings",            price: 160, cal: "280 kcal", rating: "4.5", img: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop" },
      { id: 13, name: "Mozzarella Sticks",     price: 240, cal: "340 kcal", rating: "4.7", img: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=400&h=300&fit=crop" },
    ],
  },
  {
    category: "🥤 Drinks",
    items: [
      { id: 14, name: "Oreo Milkshake",        price: 220, cal: "490 kcal", rating: "4.9", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop" },
      { id: 15, name: "Fresh Lemonade",        price: 120, cal: "90 kcal",  rating: "4.6", img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop" },
      { id: 16, name: "Cola (Large)",           price: 80,  cal: "180 kcal", rating: "4.5", img: "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?w=400&h=300&fit=crop" },
    ],
  },
];

function Menu() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">🍽️ Full Menu</h2>
        <Link to="/app/cart" className="btn fw-bold" style={{ background: "#f5a623", color: "#1a1a1a" }}>
          🛒 View Cart
        </Link>
      </div>

      {/* Search */}
      <input
        type="search"
        className="form-control mb-5 rounded-3"
        placeholder="🔍  Search burgers, pizza, drinks..."
        style={{ maxWidth: "420px" }}
      />

      {menuData.map((section) => (
        <div key={section.category} className="mb-5">
          <h5 className="fw-bold mb-3">{section.category}</h5>
          <div className="row g-3">
            {section.items.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div
                  className="card border-0 rounded-4 h-100"
                  style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
                >
                  <div
                    className="rounded-top-4 overflow-hidden"
                    style={{ height: "160px" }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => { e.target.style.display = "none"; e.target.parentElement.style.background = "#fff8ec"; }}
                    />
                  </div>
                  <div className="card-body p-3">
                    <h6 className="fw-bold mb-1">{item.name}</h6>
                    <p className="text-muted small mb-2">⭐ {item.rating} &nbsp;·&nbsp; {item.cal}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold" style={{ color: "#f5a623" }}>Rs. {item.price}</span>
                      <Link
                        to={`/app/menu/${item.id}`}
                        className="btn btn-sm fw-bold rounded-3"
                        style={{ background: "#1a1a1a", color: "white" }}
                      >
                        Add +
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
