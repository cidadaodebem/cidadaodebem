import { Campain, CampainMap } from '@models/campain.models';

export const campainsList: Campain[] = [
  {
    title: 'Chupeta Laranja',
    description: 'Investiga já o Nikolas Ferreira (chupetinha)',
    image_url: 'https://chupetalaranja.com.br/',
    id: 'chupetalaranja',
    agent: 1,
    author: 2,
    created_at: '111',
    video_url: '',
    subtitle: '',
  },
];

export const campainsMap = campainsList.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {} as CampainMap);
