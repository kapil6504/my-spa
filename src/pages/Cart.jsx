function Cart() {
  return (
    <div className="page">
      <h1>Your Cart</h1>
      <p>You have no items in your cart yet.</p>
      <div className="products" style={{ marginTop: '40px' }}>
        <div className="card"><div className="emoji">🛒</div><h3>Cart is Empty</h3><p>Go to the Shop page and add some items!</p><button className="btn">Go to Shop</button></div>
      </div>
    </div>
  )
}
export default Cart