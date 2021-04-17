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

export const MovieState = () => {
  return [
    {
      name: 'Worn Paint',
      mainImg: paint1,
      secondaryImg: paint2,
      url: '/projects/worn-paint',
      type: 'video',
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
    {
      name: 'Complex Shapes',
      mainImg: complex1,
      secondaryImg: complex2,
      url: '/projects/complex-shapes',
      type: 'video',
      awards: [
        {
          title: 'About Project',
          description:
            'This project can also be used as an intro for videos or for motion graphics',
        },
        {
          title: 'What I did',
          description:
            'It took me 30 minutes to create this video. The video is created in a full blender',
        },
      ],
    },
    {
      name: 'Kingston Logo',
      mainImg: kingston1,
      secondaryImg: kingston2,
      url: '/projects/kingston-logo',
      type: 'image',
      awards: [
        {
          title: 'About Project',
          description:
            'I created this logo to order for the Kingston Learning Center',
        },
        {
          title: 'What I did',
          description:
            'It took me 20 minutes to create this image. The image is created in a full blender',
        },
      ],
    },
    {
      name: 'Firework Animation',
      mainImg: firework1,
      secondaryImg: firework2,
      url: '/projects/firework-animation',
      type: 'video',
      awards: [
        {
          title: 'About Project',
          description:
            'A similar project is used in explosion scenes in movies or holiday greetings',
        },
        {
          title: 'What I did',
          description:
            'It took me 35 minutes to create this video. The video is created in a full blender',
        },
      ],
    },
    {
      name: 'Grass',
      mainImg: grass1,
      secondaryImg: grass2,
      url: '/projects/grass',
      type: 'image',
      awards: [
        {
          title: 'About Project',
          description: 'A real grass model used for video games or movie shots',
        },
        {
          title: 'What I did',
          description:
            'It took me 45 minutes to create this image. The image is created in a full blender',
        },
      ],
    },
  ];
};

export default MovieState;
