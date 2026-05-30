function Research() {
  return (
    <div className="page">
      <h1>Research & Insights</h1>
      <p>Stay up to date with the latest trends, buying guides, and product research from our expert team.</p>

      <div className="products" style={{ marginTop: '40px' }}>
        <div className="card"><div className="emoji">📊</div><h3>Market Trends 2025</h3><p>A deep dive into the fastest growing product categories this year.</p></div>
        <div className="card"><div className="emoji">📝</div><h3>Buying Guides</h3><p>Expert advice to help you make the right purchase every time.</p></div>
        <div className="card"><div className="emoji">🔬</div><h3>Product Reviews</h3><p>Honest, in-depth reviews tested by our QA team.</p></div>
      </div>

      <div style={{ marginTop: '60px' }}>
        <h1>Latest Articles</h1>
        <p>Fresh insights published every week by our research team.</p>
        <div className="products" style={{ marginTop: '32px' }}>
          <div className="card"><div className="emoji">🤖</div><h3>AI in E-Commerce</h3><p>How artificial intelligence is changing the way we shop online in 2025.</p></div>
          <div className="card"><div className="emoji">🌱</div><h3>Sustainable Shopping</h3><p>Top eco-friendly brands and products making a difference.</p></div>
          <div className="card"><div className="emoji">💡</div><h3>Smart Home Guide</h3><p>Everything you need to know before buying smart home devices.</p></div>
          <div className="card"><div className="emoji">📦</div><h3>Unboxing Top Picks</h3><p>Our team unboxes and reviews the most hyped products of the month.</p></div>
          <div className="card"><div className="emoji">💰</div><h3>Budget Shopping Tips</h3><p>Get the most value for your money with these expert tips.</p></div>
          <div className="card"><div className="emoji">🔐</div><h3>Online Safety Guide</h3><p>How to shop safely and protect your data online.</p></div>
        </div>
      </div>

      <div style={{ marginTop: '60px' }}>
        <h1>Popular Comparisons</h1>
        <p>Side by side product comparisons to help you decide.</p>
        <div className="products" style={{ marginTop: '32px' }}>
          <div className="card"><div className="emoji">📱</div><h3>iPhone vs Android</h3><p>Which one should you buy in 2025? We break it down.</p></div>
          <div className="card"><div className="emoji">🎧</div><h3>Wired vs Wireless</h3><p>Pros and cons of wired and wireless headphones.</p></div>
          <div className="card"><div className="emoji">💻</div><h3>Laptop Buying Guide</h3><p>How to choose the right laptop for work, study or gaming.</p></div>
        </div>
      </div>

      <div style={{ marginTop: '60px', paddingBottom: '60px' }}>
        <h1>Subscribe to Research Updates</h1>
        <p>Get our weekly research digest delivered to your inbox.</p>
        <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <input placeholder="Enter your email" style={{ padding: '12px 20px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '15px', width: '300px' }} />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Research