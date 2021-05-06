//import components
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';
import { ScrollTop } from '../components/ScrollTop';
//Framer motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutMe = () => {
  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutMe;
