import { ALGORITHMS } from '../Constants';

export const algorithms = {
  [ALGORITHMS.swap]: [
    { command: 'aux=a;' },
    { command: 'a=b;' },
    { command: 'b=aux;' },
  ],
};

export default {
  GENERAL: {
    title: 'Animated algorithms',
    run: 'Run',
  },
  HOME: {
    description: 'The purpose of this project is to represent standard computer science algorithms\' execution through animations so it would help beginners understand what algorithms are and how they work.',
  },
  HEADER: {
    explore: 'Explore',
    lang: {
      'en': 'EN',
      'ro': 'RO',
    },
  },
  ALGORITHMS: {
    swap: {
      title: 'Swap algorithm',
      explanation: 'Swapping two variables refers to mutually exchanging the values of the variables. <br />Given 2 variables a and b, the algorithm uses a third temporary variable c in order to exchange their values. <br />At the end of the algorithm, a will hold b\'s value and b will hold a\'s value.'
    },
    maxOfN: 'Maximum of n numbers algorithm',
  },
};
