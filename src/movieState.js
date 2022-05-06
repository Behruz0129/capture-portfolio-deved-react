//import images
import kangaroo1 from './img/projects/kangaroo.jpg';
import kangaroo2 from './img/projects/kangaroo.jpg';

export const MovieState = () => {
  return [
    {
      name: 'Kangaroo',
      mainImg: kangaroo1,
      secondaryImg: kangaroo2,
      url: '/projects/kangaroo',
      type: 'photo',
      id: 0,
      awards: [
        {
          title: 'About Project',
          description:
            'This model can be used in the field of cinematography, game applications. The model`s grid is low poly.',
        },
        {
          title: 'What I did',
          description:
            'This model used a particle system and was created in 1 day. The part has been edited and colored in a realistic way.',
        },
      ],
    },
    {
      name: 'Kangaroo',
      mainImg: kangaroo1,
      secondaryImg: kangaroo2,
      url: '/projects/kangaroo',
      type: 'photo',
      id: 0,
      awards: [
        {
          title: 'About Project',
          description:
            'This model can be used in the field of cinematography, game applications. The model`s grid is low poly.',
        },
        {
          title: 'What I did',
          description:
            'This model used a particle system and was created in 1 day. The part has been edited and colored in a realistic way.',
        },
      ],
    },
  ];
};

export default MovieState;
