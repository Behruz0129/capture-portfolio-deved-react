//import components
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import JobSkill from '../components/JobSkill';
import ServicesSection from '../components/ServicesSection';
//Framer motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutMe = () => {
  window.scrollTo(0, 0);
  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <AboutSection />
      <JobSkill />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutMe;
