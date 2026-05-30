function About() {
  return (
    <div className="page">
      <h1>About ShopEase</h1>
      <p>ShopEase was founded in 2020 with a simple mission — make online shopping easy, affordable, and enjoyable for everyone. We partner with top brands and independent sellers to bring you the best products across every category.</p>
      <div className="products" style={{ marginTop: '40px' }}>
        <div className="card"><div className="emoji">🏆</div><h3>Our Mission</h3><p>To deliver quality products at fair prices with exceptional service.</p></div>
        <div className="card"><div className="emoji">🌍</div><h3>Global Reach</h3><p>Serving customers in 50+ countries worldwide.</p></div>
        <div className="card"><div className="emoji">🤝</div><h3>Trusted Partners</h3><p>Working with 500+ verified sellers and brands.</p></div>
      </div>
    </div>
  )
}
export default About