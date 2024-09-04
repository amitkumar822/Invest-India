import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AbouteUS from './components/AbouteUS'
import GetInTouch from './components/GetInTouch'
import ProductDetails from './components/ProductDetails'
import TrustyServices from './components/TrustyServices'
import BannerMain from './components/BannerMain'
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='w-full bg-white text-black overflow-hidden'>
      <Navbar />
      <BannerMain />
      <AbouteUS />
      <GetInTouch />
      <ProductDetails />
      <TrustyServices />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App