import React from 'react'
import Navbar from '../../Components/Navbar'
import Hero from './Hero'
import FeatureRow from './FeatureRow'
import Img21 from '../../assets/img (21).png';
import Img9 from '../../assets/img (9).png';
import Img20 from '../../assets/img (20).png';
import Img8 from '../../assets/img (8).png';
import Footer from '../../Components/Footer';


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureRow
        title="Track Your Stress"
        highlight="Levels"
        description="Keep track of how you feel and notice patterns in your emotions over time."
        image={Img21}
        reverse={true}
      />

      <FeatureRow
        title="Monitor Your"
        highlight="Mental Health"
        description="Reflect on your feelings and build better self-awareness."
        image={Img9}
        reverse={false}
      />
      <FeatureRow
        title="Receive Insights on Your Emotions and Stress Levels."
        highlight="Personalized Insights"
        description="Discover trends in your moods and learn what affects your stress levels."
        image={Img20}
        reverse={true}
      />

      <FeatureRow
        title="Calm Down with Support Tools"
        highlight=""
        description="Take a moment to pause, breathe, and reset whenever you need to."
        image={Img8}
        reverse={false}
      />
      <Footer />
    </>
  )
}

export default LandingPage