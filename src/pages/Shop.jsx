function Shop() {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '₹2,999', emoji: '🎧' },
    { id: 2, name: 'Running Shoes', price: '₹3,499', emoji: '👟' },
    { id: 3, name: 'Smart Watch', price: '₹5,999', emoji: '⌚' },
    { id: 4, name: 'Laptop Bag', price: '₹1,299', emoji: '💼' },
    { id: 5, name: 'Sunglasses', price: '₹899', emoji: '🕶️' },
    { id: 6, name: 'Water Bottle', price: '₹499', emoji: '🍶' },
  ]
  return (
    <div className="page">
      <h1>Shop</h1>
      <p>Browse our top products handpicked just for you.</p>
      <div className="products">
        {products.map(p => (
          <div className="card" key={p.id}>
            <div className="emoji">{p.emoji}</div>
            <h3>{p.name}</h3>
            <div className="price">{p.price}</div>
            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Shop