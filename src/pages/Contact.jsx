function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Have a question or need help? Reach out to us and we'll get back to you within 24 hours.</p>
      <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
        <input placeholder="Your Name" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '15px' }} />
        <input placeholder="Your Email" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '15px' }} />
        <textarea placeholder="Your Message" rows={5} style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '15px' }} />
        <button className="btn" style={{ width: 'fit-content' }}>Send Message</button>
      </div>
    </div>
  )
}
export default Contact