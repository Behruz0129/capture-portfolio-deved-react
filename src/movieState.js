//import images
import paint1 from './img/projects/paint1.gif';
import paint2 from './img/projects/paint2.png';

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
