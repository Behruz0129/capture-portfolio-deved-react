//styled
import styled from 'styled-components';
import { About } from '../styles';
//Framer motion
import { motion } from 'framer-motion';
import { pageAnimation, smallLineAnim, fade } from '../animation';
//emailjs
import emailjs from 'emailjs-com';
import { ScrollTop } from '../components/ScrollTop';

const ContactMe = () => {
  //events
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_k152ipp',
        'template_sfir81w',
        e.target,
        'user_76r5jRtM5Oo3roPYZNtnd'
      )
      .then(
        result => {
          alert('🤗Xabar muaffaqqiyatli yuborildi!');
        },
        error => {
          console.log('😱Yuborishda nomalum xato yuzaga keldi!');
        }
      );

    e.target.reset();
  }

  return (
    <Contact
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <div className='title'>
        <motion.h2 variants={fade} initial='hidden' animate='show'>
          Contact Us
        </motion.h2>
        <motion.div
          variants={smallLineAnim}
          initial='hidden'
          animate='show'
          className='line'
        ></motion.div>
        <motion.p variants={fade} initial='hidden' animate='show'>
          You can send me messages, suggestions and complaints here. I will
          reply to you within 24 hours.
        </motion.p>
      </div>
      <form className='contact-form' onSubmit={sendEmail}>
        <div>
          <div>
            <label htmlFor='first_name'>First Name</label>
            <input type='text' name='first_name' id='first_name' />
          </div>
          <div>
            <label htmlFor='last_name'>Last Name</label>
            <input type='text' name='last_name' />
          </div>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' />
        </div>
        <div>
          <label htmlFor='number'>Phone</label>
          <input type='text' name='number' />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea name='message' cols='30' rows='3'></textarea>
        </div>
        <button type='submit'>Send</button>
      </form>
      <ScrollTop />
    </Contact>
  );
};

//styled components

const Contact = styled(About)`
  padding: 10rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 10rem 5rem;
  }
  .title {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80%;
    margin-bottom: 3rem;
    @media (max-width: 800px) {
      width: 90%;
    }
    .line {
      height: 0.5rem;
      background: #0096bb;
      margin-bottom: 3rem;
      margin: 0;
      width: 70%;
      resize: none;
    }
    h2,
    p {
      padding: 2rem 0;
    }
  }
  form {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1200px) {
      width: 80%;
    }
    @media (max-width: 800px) {
      width: 90%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      &:nth-child(1) {
        flex-direction: row;
        justify-content: space-between;
        div {
          display: flex;
          flex-direction: column;
          width: 49%;
        }
        @media (max-width: 600px) {
          flex-direction: column;
          div {
            width: 100%;
          }
        }
      }
      input,
      textarea {
        width: 100%;
        padding: 1rem;
        border: none;
        &:focus {
          outline: 3px solid #0096bb;
        }
      }
      label {
        margin-bottom: 0.5rem;
      }
    }
    button {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;

export default ContactMe;
