import { CampainMap } from '../models/campain.models';

export const campainsList = [
  {
    label: 'Chupeta Laranja',
    description: 'Investiga já o Nikolas Ferreira (chupetinha)',
    iframeUrl: 'https://chupetalaranja.com.br/',
    path: 'chupetalaranja',
  },
];

export const campainsMap = campainsList.reduce((acc, curr) => {
  acc[curr.path] = curr;
  return acc;
}, {} as CampainMap);
