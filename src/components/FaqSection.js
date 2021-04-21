//import styled
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
//framer motion
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How do I start?'>
          <div className='answer'>
            <p>If you have a desire to hire me or order me, then contact me.</p>
            <p>
              Contact me from the contact section of our site. I will reply to
              you with in 24 hours. If you don’t have an important message,
              don’t bother.
            </p>
          </div>
        </Toggle>
        <Toggle title='Different Payment Methods'>
          <div className='answer'>
            <p>
              We have half payment in advance (for security and advance). Then
              we make the order. You will pay the other half after we place the
              order with you.
            </p>
            <p>You can use any payment method (Click, PayMe, etc.).</p>
          </div>
        </Toggle>
        <Toggle title='What Products do You offer?'>
          <div className='answer'>
            <p>
              We specialize in creating 3D models, video ads, cartoons, 3D
              building architecture and video clips.
            </p>
            <p>
              Write to me if you intend to offer a job to your team or if you
              want to collaborate. We will contact you and agree on this
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

//styled components
const Faq = styled(About)`
  display: block;
  span {
    display: block;
    padding-top: 1rem;
  }
  h2 {
    padding-bottom: 4rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 1rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
