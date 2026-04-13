// src/pages/Info/Info.jsx
import { useState } from 'react'
import InfoSidebar from '../../components/InfoSidebar/InfoSidebar'
import AboutContent from '../../components/InfoContent/AboutContent'
import ContactContent from '../../components/InfoContent/ContactContent'
import './Info.css'

const Info = () => {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="nj-info-page">
      <InfoSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="nj-info-main">
        {activeTab === 'about' && <AboutContent />}
        {activeTab === 'contact' && <ContactContent />}
      </div>
    </div>
  )
}

export default Info
