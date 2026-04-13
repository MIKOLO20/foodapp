// src/pages/Contact/Contact.jsx
import { useState } from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Send, Clock } from 'lucide-react'
import toast from 'react-hot-toast'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

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

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    console.log('Form submitted:', formData)
    toast.success('Message sent successfully! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="nj-contact">
      {/* Hero Section */}
      <section className="nj-contact-hero">
        <div className="container-fluid">
          <h1 className="nj-contact-title">Get in Touch</h1>
          <p className="nj-contact-subtitle">We'd love to hear from you. Contact us anytime!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="nj-contact-main py-5">
        <div className="container-fluid">
          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-12 col-lg-6">
              <div className="nj-contact-form-wrapper">
                <h2>Send us a Message</h2>
                <form onSubmit={handleSubmit} className="nj-contact-form">
                  <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="subject" className="form-label">Subject (Optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-12 col-lg-6">
              {/* Info Card */}
              <div className="nj-contact-info-wrapper mb-4">
                <h2>Contact Information</h2>
                
                <div className="nj-contact-info-item">
                  <Mail className="nj-contact-icon" />
                  <div>
                    <h3>Email</h3>
                    <p><a href="mailto:info@mikkyeats.com">info@mikkyeats.com</a></p>
                  </div>
                </div>

                <div className="nj-contact-info-item">
                  <Phone className="nj-contact-icon" />
                  <div>
                    <h3>Phone</h3>
                    <p><a href="tel:+234-800-123-4567">+234 (800) 0000000</a></p>
                  </div>
                </div>

                <div className="nj-contact-info-item">
                  <MapPin className="nj-contact-icon" />
                  <div>
                    <h3>Address</h3>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="nj-contact-info-item">
                  <Clock className="nj-contact-icon" />
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 10am - 10pm<br />Saturday - Sunday: 11am - 11pm</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="nj-contact-social-wrapper">
                <h3>Follow Us</h3>
                <div className="nj-contact-social">
                  <a href="#facebook" title="Facebook" className="nj-social-link">
                    <Facebook size={24} />
                  </a>
                  <a href="#instagram" title="Instagram" className="nj-social-link">
                    <Instagram size={24} />
                  </a>
                  <a href="#twitter" title="Twitter" className="nj-social-link">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="nj-contact-faq bg-light py-5">
        <div className="container-fluid">
          <h2 className="mb-5">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <div className="nj-faq-card">
                <h3>How long does delivery take?</h3>
                <p>Our standard delivery time is 30-45 minutes. Express delivery (15-20 minutes) is also available for selected areas.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="nj-faq-card">
                <h3>Do you offer customization?</h3>
                <p>Yes! You can customize most of our dishes. Just add your preferences in the order notes.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="nj-faq-card">
                <h3>What if I have dietary restrictions?</h3>
                <p>We cater to vegetarian, vegan, gluten-free, and other dietary needs. Contact us for custom orders.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="nj-faq-card">
                <h3>Can I place bulk orders?</h3>
                <p>Absolutely! For events and bulk orders, please contact us directly for special pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
