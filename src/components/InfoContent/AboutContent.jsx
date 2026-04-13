// src/components/InfoContent/AboutContent.jsx
import { Heart, Star, Users, Truck, User } from 'lucide-react'
import './InfoContent.css'

const AboutContent = () => {
  return (
    <div className="nj-info-content">
      <div className="nj-content-header">
        <h2>About NaijaEats</h2>
        <p className="nj-content-subtitle">Authentic Nigerian cuisine delivered to your door</p>
      </div>

      <div className="nj-content-body">
        <section className="nj-info-section">
          <h3>Our Story</h3>
          <p>
            NaijaEats started with a simple mission: bring the authentic taste of Nigeria to everyone's doorstep. 
            What began as a small family kitchen has grown into a beloved food delivery service, serving over 10,000 happy customers.
          </p>
          <p>
            We believe that food is more than just sustenance—it's culture, tradition, and love on a plate. 
            Every dish we prepare carries the essence of Nigerian heritage and the passion of our experienced chefs.
          </p>
        </section>

        <section className="nj-info-section">
          <h3>Why Choose Us?</h3>
          <div className="nj-features-list">
            <div className="nj-feature">
              <div className="nj-feature-icon">
                <Star size={24} color="#f4a261" />
              </div>
              <div>
                <h4>Premium Quality</h4>
                <p>Fresh ingredients from local suppliers. No preservatives, pure authenticity.</p>
              </div>
            </div>

            <div className="nj-feature">
              <div className="nj-feature-icon">
                <Truck size={24} color="#f4a261" />
              </div>
              <div>
                <h4>Fast Delivery</h4>
                <p>Hot meals right to your door within 30 minutes.</p>
              </div>
            </div>

            <div className="nj-feature">
              <div className="nj-feature-icon">
                <Users size={24} color="#f4a261" />
              </div>
              <div>
                <h4>Expert Chefs</h4>
                <p>Trained chefs with years of experience in traditional Nigerian cuisine.</p>
              </div>
            </div>

            <div className="nj-feature">
              <div className="nj-feature-icon">
                <Heart size={24} color="#f4a261" />
              </div>
              <div>
                <h4>Made with Love</h4>
                <p>Every meal prepared with care and attention to detail.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="nj-info-section">
          <h3>Our Stats</h3>
          <div className="nj-stats-container">
            <div className="nj-stat-item">
              <span className="nj-stat-number">10K+</span>
              <span className="nj-stat-label">Happy Customers</span>
            </div>
            <div className="nj-stat-item">
              <span className="nj-stat-number">25+</span>
              <span className="nj-stat-label">Dishes</span>
            </div>
            <div className="nj-stat-item">
              <span className="nj-stat-number">4.8 <Star size={20} style={{display: 'inline', color: '#f4a261'}} /></span>
              <span className="nj-stat-label">Rating</span>
            </div>
          </div>
        </section>

        <section className="nj-info-section">
          <h3>Our Team</h3>
          <div className="nj-team-list">
            <div className="nj-team-member">
              <div className="nj-team-avatar" style={{fontSize: '2rem'}}><User size={32} color="#f4a261" /></div>
              <div>
                <h4>Chef Tunde</h4>
                <p>Head Chef - 15 years experience</p>
              </div>
            </div>
            <div className="nj-team-member">
              <div className="nj-team-avatar" style={{fontSize: '2rem'}}><User size={32} color="#f4a261" /></div>
              <div>
                <h4>Chef Zainab</h4>
                <p>Soup Specialist</p>
              </div>
            </div>
            <div className="nj-team-member">
              <div className="nj-team-avatar" style={{fontSize: '2rem'}}><User size={32} color="#f4a261" /></div>
              <div>
                <h4>Chisom</h4>
                <p>Manager</p>
              </div>
            </div>
            <div className="nj-team-member">
              <div className="nj-team-avatar" style={{fontSize: '2rem'}}><User size={32} color="#f4a261" /></div>
              <div>
                <h4>Amara</h4>
                <p>Operations Lead</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutContent
