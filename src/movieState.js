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
    {
      name: 'Complex Shapes',
      mainImg: complex1,
      secondaryImg: complex2,
      url: '/projects/complex-shapes',
      type: 'video',
      id: 1,
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
      id: 2,
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
      name: 'Firework',
      mainImg: firework1,
      secondaryImg: firework2,
      url: '/projects/firework-animation',
      type: 'video',
      id: 3,
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
      id: 4,
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
    {
      name: 'Tank M1 ABRAMS',
      mainImg: tank1,
      secondaryImg: tank2,
      url: '/projects/tank-m1-abrams',
      type: 'image',
      id: 5,
      awards: [
        {
          title: 'About Project',
          description: 'A tank model used for videos or games or movie shots',
        },
        {
          title: 'What I did',
          description:
            'It took me 3 days to create this image. The image is created in a full blender',
        },
      ],
    },
    {
      name: 'Iron Man Head',
      mainImg: ironman1,
      secondaryImg: ironman2,
      url: '/projects/iron-man-head',
      type: 'image',
      id: 6,
      awards: [
        {
          title: 'About Project',
          description: 'A tank model used for videos or games or movie shots',
        },
        {
          title: 'What I did',
          description:
            'It took me 5 hours to create this image. The image is created in a full blender',
        },
      ],
    },
    {
      name: 'Startwars Head',
      mainImg: swHead1,
      secondaryImg: swHead2,
      url: '/projects/sw-head',
      type: 'image',
      id: 7,
      awards: [
        {
          title: 'About Project',
          description: 'I am gonna use this head for games. It is awesome. I use sculping for this project',
        },
        {
          title: 'What I did',
          description:
            'It took me 3 hours to create this image. The image is created in a full blender',
        },
      ],
    },
    {
      name: 'Without Oxygen',
      mainImg: nasos1,
      secondaryImg: nasos2,
      url: '/projects/without-oxygen',
      type: 'image',
      id: 8,
      awards: [
        {
          title: 'About Project',
          description: 'This stage image is used for graphics in movies',
        },
        {
          title: 'What I did',
          description:
            'It took me 6 hours to create this image. The image is created in a full blender',
        },
      ],
    },
    {
      name: 'iPhone7 Trailer',
      mainImg: iPhone1,
      secondaryImg: iPhone2,
      url: '/projects/iphone-trailer',
      type: 'video',
      id: 9,
      awards: [
        {
          title: 'About Project',
          description: 'I have seen a lot of trailers, i like those, so , i made iPhone trailer. You can see full video in my youtube channel',
        },
        {
          title: 'What I did',
          description:
            'It took me 2 days to create this trailer. The video is created in a blender and i used filmora for editing',
        },
      ],
    },
  ];
};

export default MovieState;
