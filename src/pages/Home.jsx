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

      <div className="page" style={{ background: '#f9f9f9' }}>
        <h1>Top Categories</h1>
        <p>Explore our most popular shopping categories loved by thousands of customers.</p>
        <div className="products">
          <div className="card"><div className="emoji">📱</div><h3>Electronics</h3><p>Phones, laptops, accessories and more.</p></div>
          <div className="card"><div className="emoji">👗</div><h3>Fashion</h3><p>Trendy clothes, shoes and accessories.</p></div>
          <div className="card"><div className="emoji">🏠</div><h3>Home & Living</h3><p>Furniture, decor and kitchen essentials.</p></div>
          <div className="card"><div className="emoji">💪</div><h3>Sports</h3><p>Gear and equipment for every sport.</p></div>
          <div className="card"><div className="emoji">📚</div><h3>Books</h3><p>Bestsellers, textbooks and more.</p></div>
          <div className="card"><div className="emoji">🧴</div><h3>Beauty</h3><p>Skincare, makeup and wellness products.</p></div>
        </div>
      </div>

      <div className="page">
        <h1>What Our Customers Say</h1>
        <p>Thousands of happy customers trust ShopEase every day.</p>
        <div className="products" style={{ marginTop: '40px' }}>
          <div className="card"><div className="emoji">⭐⭐⭐⭐⭐</div><h3>Rohit S.</h3><p>"Amazing experience! Delivered in just 2 days and the product quality was top notch."</p></div>
          <div className="card"><div className="emoji">⭐⭐⭐⭐⭐</div><h3>Priya M.</h3><p>"Super easy to navigate and checkout. Will definitely shop again!"</p></div>
          <div className="card"><div className="emoji">⭐⭐⭐⭐⭐</div><h3>Arjun K.</h3><p>"Best prices I've found online. Customer support was also very helpful."</p></div>
        </div>
      </div>

      <div className="page" style={{ background: '#1a1a2e', color: 'white' }}>
        <h1 style={{ color: 'white' }}>Our Numbers</h1>
        <p style={{ color: '#aaa' }}>A glimpse of what we've achieved together with our customers.</p>
        <div className="products" style={{ marginTop: '40px' }}>
          <div className="card" style={{ background: '#2a2a3e', border: 'none' }}><div className="emoji">🛍️</div><h3 style={{ color: 'white' }}>2M+ Orders</h3><p>Successfully delivered across India.</p></div>
          <div className="card" style={{ background: '#2a2a3e', border: 'none' }}><div className="emoji">😊</div><h3 style={{ color: 'white' }}>500K+ Customers</h3><p>Happy and returning shoppers.</p></div>
          <div className="card" style={{ background: '#2a2a3e', border: 'none' }}><div className="emoji">🏪</div><h3 style={{ color: 'white' }}>10K+ Products</h3><p>Across dozens of categories.</p></div>
          <div className="card" style={{ background: '#2a2a3e', border: 'none' }}><div className="emoji">🌆</div><h3 style={{ color: 'white' }}>100+ Cities</h3><p>Delivering all across India.</p></div>
        </div>
      </div>

      <div className="page">
        <h1>Newsletter</h1>
        <p>Subscribe to get the latest deals, offers and product launches straight to your inbox.</p>
        <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <input placeholder="Enter your email" style={{ padding: '12px 20px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '15px', width: '300px' }} />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Home