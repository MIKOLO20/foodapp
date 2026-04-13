// src/pages/About/About.jsx
import { Star, Truck, Users, Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import './About.css'

const About = () => {
  return (
    <div className="nj-about">
      {/* Hero Section */}
      <section className="nj-about-hero">
        <div className="container-fluid">
          <h1 className="nj-about-title">About MikkyEats</h1>
          <p className="nj-about-subtitle">Bringing Authentic Nigerian Flavors to Your Table</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="nj-about-story container-fluid py-5">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h2>Our Story</h2>
            <p>
              Founded in 2026, MikkyEats was born from a passion for authentic Nigerian cuisine and a desire to make traditional recipes accessible to everyone. What started as a small family operation has grown into a beloved food destination.
            </p>
            <p>
              We believe that food is more than just sustenance—it's a celebration of culture, tradition, and community. Every dish we serve is prepared with love, using the finest ingredients and time-honored recipes passed down through generations.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="nj-story-image">
              <img src="/images/jollof-rice.jpg" alt="Nigerian jollof rice" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="nj-why-choose-us bg-light py-5">
        <div className="container-fluid">
          <h2 className="text-center mb-5">Why Choose NaijaEats?</h2>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="nj-feature-card">
                <Star className="nj-feature-icon" />
                <h3>Quality Ingredients</h3>
                <p>We use only the freshest, finest ingredients sourced from trusted suppliers.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="nj-feature-card">
                <Truck className="nj-feature-icon" />
                <h3>Fast Delivery</h3>
                <p>Quick and reliable delivery to your door, always hot and fresh.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="nj-feature-card">
                <Users className="nj-feature-icon" />
                <h3>Expert Team</h3>
                <p>Our skilled chefs bring years of experience to every meal.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="nj-feature-card">
                <Heart className="nj-feature-icon" />
                <h3>Made with Love</h3>
                <p>Every dish is prepared with passion and dedication to excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="nj-stats py-5">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="nj-stat">
                <h3>10K+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="nj-stat">
                <h3>25+</h3>
                <p>Menu Items</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="nj-stat">
                <h3 className="d-flex align-items-center justify-content-center gap-1">
                  4.8
                  <Star size={24} style={{color: '#f4a261'}} />
                </h3>
                <p>Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="nj-about-footer">
        <div className="container-fluid">
          <div className="row g-4 mb-5">
            {/* About Footer */}
            <div className="col-12 col-md-4">
              <h3>NaijaEats</h3>
              <p>Bringing authentic Nigerian flavors to your table with quality ingredients and passionate cooking.</p>
              <div className="nj-footer-social">
                <a href="#facebook" title="Facebook"><Facebook size={20} /></a>
                <a href="#instagram" title="Instagram"><Instagram size={20} /></a>
                <a href="#twitter" title="Twitter"><Twitter size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-md-4">
              <h3>Quick Links</h3>
              <ul className="nj-footer-links">
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-12 col-md-4">
              <h3>Contact</h3>
              <div className="nj-footer-contact-info">
                <div className="nj-footer-contact-item">
                  <Mail size={18} /> <a href="mailto:info@naijaeats.com">info@mikkyeats.com</a>
                </div>
                <div className="nj-footer-contact-item">
                  <Phone size={18} /> <a href="tel:+234-800-123-4567">+234 (800) 000-0000</a>
                </div>
                <div className="nj-footer-contact-item">
                  <MapPin size={18}/><span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="nj-footer-bottom">
            <p>&copy; 2024 MikkyEats. All rights reserved. | Made with <Heart size={14} style={{display: 'inline', marginBottom: '-2px'}} /> in Lagos</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About
