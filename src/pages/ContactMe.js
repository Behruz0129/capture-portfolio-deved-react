//Framer motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ContactMe = () => {
  window.scrollTo(0, 0);
  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <h1>CONTACT</h1>
      <p>Email</p>
      <p>Telegram</p>
      <p>Instagram</p>
      <p>Art Station</p>
    </motion.div>
  );
};

export default ContactMe;
