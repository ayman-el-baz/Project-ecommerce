import React from 'react'
import Layout from './LayoutsLanding/Layout'
import Acceuile from './Acceuile'
import WhatsAppIcon from './WhatsAppIcon'
import FeatureSection from './FeatureSection'
import AboutUs from './AboutUs'
import Location from './Location'


export default function Landing() {
  return (
    <Layout>
      <WhatsAppIcon />
      <Acceuile />
      <FeatureSection />
      <AboutUs />
      <Location />
    </Layout>
  )
}
