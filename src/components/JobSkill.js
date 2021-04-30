//import styled
import styled from 'styled-components';
//import images
import blenderLogo from '../img/blender-logo.png';
import mayaLogo from '../img/maya-logo.png';
import afterEffectLogo from '../img/after-effect-logo.png';
import premireProLogo from '../img/premire-pro-logo.png';
import unityLogo from '../img/unity-logo.png';
import unrealIngineLogo from '../img/unreal-ingine-logo.png';
import cshLogo from '../img/csh-logo.png';
//scroll animations
import { scrollSection } from '../animation';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';

const JobSkill = () => {
  const [element, controls] = useScroll();
  return (
    <Job
      ref={element}
      variants={scrollSection}
      initial='hidden'
      animate={controls}
    >
      <h2>
        My <span>job</span> skills
      </h2>
      <Wrap>
        <img src={blenderLogo} alt='blender' />
        <img src={mayaLogo} alt='maya' className='tutorial' />
        <img src={afterEffectLogo} alt='afterEffect' className='tutorial' />
        <img src={premireProLogo} alt='premirePro' className='tutorial' />
        <img src={unityLogo} alt='unity' className='tutorial' />
        <img src={unrealIngineLogo} alt='unrealIngine' className='tutorial' />
        <img src={cshLogo} alt='csh' className='tutorial' />
      </Wrap>
    </Job>
  );
};

//styled components

const Job = styled(motion.div)`
  padding: 3rem 10rem;
  color: white;
  h2 {
    margin-bottom: 3rem;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .tutorial {
    opacity: 30%;
    width: 4rem;
  }
  img {
    width: 5rem;
  }
`;

export default JobSkill;
