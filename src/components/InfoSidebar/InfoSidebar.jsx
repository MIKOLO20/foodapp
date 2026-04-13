// src/components/InfoSidebar/InfoSidebar.jsx
import { Info, Phone } from 'lucide-react'
import './InfoSidebar.css'

const InfoSidebar = ({ activeTab, onTabChange }) => {
  return (
    <aside className="nj-info-sidebar">
      <div className="nj-sidebar-header">
        <h3>Information</h3>
      </div>
      
      <nav className="nj-sidebar-nav">
        <button
          className={`nj-sidebar-link ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => onTabChange('about')}
        >
          <Info size={18} className="nj-sidebar-icon" />
          <span>About Us</span>
        </button>
        
        <button
          className={`nj-sidebar-link ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => onTabChange('contact')}
        >
          <Phone size={18} className="nj-sidebar-icon" />
          <span>Contact Us</span>
        </button>
      </nav>
    </aside>
  )
}

export default InfoSidebar
