import React from 'react'
import FeaturesHero from './FeaturesHero'
import FeatureItem from './FeatureItem'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Img3 from '../../assets/img (3).png';
import Img4 from '../../assets/img (4).png';
import Img17 from '../../assets/img (17).png';
import Img5 from '../../assets/img (5).png';
import './Features.css'


const Features = () => {
  return (
    <>
      <Navbar />
      <FeaturesHero />
      <div className="features-list">
        <FeatureItem
          title="Explore Different Tools to Calm Your Stress & Emotions"
          description="Discover a variety of support tools built to help you manage stress, relax your mind, and stay emotionally balanced."
          image={Img17}
          reverse={false}
        />
        <FeatureItem
          title="Customize Moods & Quotes Your Way"
          description="Personalize your mood tracker, adjust stress levels, and add meaningful quotes that reflect who you are."
          image={Img4}
          reverse={true}
        />
        <FeatureItem
          title="Write on How the Day Went"
          description="Reflect on your day with guided journaling. Track your emotions and understand what's really affecting your mood."
          image={Img3}
          reverse={false}
        />
        <FeatureItem
          title="Customize Moods & Quotes Your Way"
          description="Personalize your mood tracker, adjust stress levels, and add meaningful quotes that reflect who you are."
          image={Img5}
          reverse={true}
        />
      </div>
      <Footer />
    </>
  )
}

export default Features