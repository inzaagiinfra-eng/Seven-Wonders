import React from 'react'
import Hero from '../hero/Hero'
import BuySaleRent from '../companytype/BuySaleRent'
import PropertyType from '../propertytype/PropertyType'
import OurQuality from '../ourquality/OurQuality'
import RecentProject from '../recentproject/RecentProject'
import WhoWeAre from '../whoweare/WhoWeAre'
import ShowReviews from '../review/ShowReviews'
import Contact from '../contact/Contact'
const Home = () => {
  return (
    <div>
      <Hero/>
      <BuySaleRent/>
      <PropertyType/>
      <OurQuality/>
      <RecentProject/>
      <WhoWeAre/>
      <ShowReviews/>
      <Contact/>
    </div>
  )
}

export default Home
