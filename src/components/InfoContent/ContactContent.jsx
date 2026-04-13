// src/components/InfoContent/ContactContent.jsx
import { useState } from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Send } from 'lucide-react'
import toast from 'react-hot-toast'
import './InfoContent.css'

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      toast.success('Message sent! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="nj-info-content">
      <div className="nj-content-header">
        <h2>Contact Us</h2>
        <p className="nj-content-subtitle">Get in touch with us anytime</p>
      </div>

      <div className="nj-content-body">
        <div className="nj-contact-grid">
          {/* Contact Form */}
          <section className="nj-info-section nj-contact-form-section">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} className="nj-contact-form">
              <div className="nj-form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="nj-form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="nj-form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="nj-submit-btn"
                disabled={isSubmitting}
              >
                <Send size={16} className="me-1" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <section className="nj-info-section">
            <h3>Contact Info</h3>
            
            <div className="nj-contact-item">
              <Mail size={20} color="#f4a261" />
              <div>
                <h4>Email</h4>
                <a href="mailto:hello@naijaeats.com">hello@naijaeats.com</a>
              </div>
            </div>

            <div className="nj-contact-item">
              <Phone size={20} color="#f4a261" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+234801234567">+234 (0) 801 234 5678</a>
              </div>
            </div>

            <div className="nj-contact-item">
              <MapPin size={20} color="#f4a261" />
              <div>
                <h4>Address</h4>
                <p>123 Lagos Street, Lekki Phase 1</p>
              </div>
            </div>

            <div className="nj-hours">
              <h4>Hours</h4>
              <p><strong>Mon-Fri:</strong> 10 AM - 10 PM</p>
              <p><strong>Sat-Sun:</strong> 11 AM - 11 PM</p>
            </div>

            <div className="nj-social-links">
              <h4>Follow Us</h4>
              <div className="nj-social-icons">
                <a href="#" title="Facebook"><Facebook size={20} /></a>
                <a href="#" title="Instagram"><Instagram size={20} /></a>
                <a href="#" title="Twitter"><Twitter size={20} /></a>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ */}
        <section className="nj-info-section">
          <h3>Frequently Asked Questions</h3>
          <div className="nj-faq-list">
            <div className="nj-faq-item">
              <h4>How long does delivery take?</h4>
              <p>25-45 minutes within Lagos. Express delivery available for premium members.</p>
            </div>
            <div className="nj-faq-item">
              <h4>Do you accept online payments?</h4>
              <p>Yes! Card, mobile money, bank transfers, and cash on delivery.</p>
            </div>
            <div className="nj-faq-item">
              <h4>Can I customize my order?</h4>
              <p>Absolutely! Add special instructions and we'll prepare it your way.</p>
            </div>
            <div className="nj-faq-item">
              <h4>Do you cater for events?</h4>
              <p>Yes! Contact us for custom catering packages.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactContent
