function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to ShopEase</h1>
        <p>Discover amazing products at unbeatable prices. Shop smarter, live better.</p>
        <button className="btn">Shop Now</button>
        <button className="btn-outline">Learn More</button>
      </div>

      <div className="page">
        <h1>Why Choose Us?</h1>
        <p>We offer a wide range of high-quality products with fast delivery, easy returns, and 24/7 customer support. Whether you're shopping for electronics, fashion, or home essentials — we've got you covered.</p>

        <div className="products" style={{ marginTop: '40px' }}>
          <div className="card"><div className="emoji">🚚</div><h3>Fast Delivery</h3><p>Get your orders delivered within 2-3 business days.</p></div>
          <div className="card"><div className="emoji">🔒</div><h3>Secure Payments</h3><p>100% safe and encrypted transactions every time.</p></div>
          <div className="card"><div className="emoji">↩️</div><h3>Easy Returns</h3><p>Not satisfied? Return within 30 days, no questions asked.</p></div>
          <div className="card"><div className="emoji">🎧</div><h3>24/7 Support</h3><p>Our team is always here to help you anytime.</p></div>
        </div>
      </div>
    </div>
  )
}

export default Home