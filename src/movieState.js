//import images
import paint1 from './img/projects/paint1.gif';
import paint2 from './img/projects/paint2.png';
import complex1 from './img/projects/complex1.gif';
import complex2 from './img/projects/complex2.jpg';
import kingston1 from './img/projects/kingston1.png';
import kingston2 from './img/projects/kingston2.jpg';
import firework1 from './img/projects/firework1.gif';
import firework2 from './img/projects/firework2.jpg';
import grass1 from './img/projects/grass1.jpg';
import grass2 from './img/projects/grass2.jpg';
import tank1 from './img/projects/tank1.png';
import tank2 from './img/projects/tank2.png';
import ironman1 from './img/projects/iron-man1.jpg';
import ironman2 from './img/projects/iron-man2.jpg';
import swHead1 from './img/projects/sw_head1.jpg';
import swHead2 from './img/projects/sw_head2.jpg';
import nasos1 from './img/projects/nasos1.jpg';
import nasos2 from './img/projects/nasos2.jpg';
import iPhone1 from './img/projects/iphoneseven1.gif';
import iPhone2 from './img/projects/iphoneseven.png';

export const MovieState = () => {
  return [
    {
      name: 'Worn Paint',
      mainImg: paint1,
      secondaryImg: paint2,
      url: '/projects/worn-paint',
      type: 'video',
      id: 0,
      awards: [
        {
          title: 'About Project',
          description:
            'This project can be used for advertising for paints or similar scenes',
        },
        {
          title: 'What I did',
          description:
            'It took me 1 hour to create this video. The video is created in a full blender',
        },
      ],
    },
  ];
};

export default MovieState;
