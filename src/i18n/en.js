import { ALGORITHMS } from '../Constants';

export const algorithms = {
  [ALGORITHMS.swap]: [
    { command: 'aux=a;' },
    { command: 'a=b;' },
    { command: 'b=aux;' },
  ],
  [ALGORITHMS.maxOfN]: [
    { command: 'max = list[0];' },
    {
      command: 'for (i = 1; i < n; i++) {',
      block: [
        {
          command: 'if (list[i] > max) {',
          block: [
            { command: 'max = list[i];' }
          ],
        },
        { command: '}' },
      ],
    },
    { command: '}' },
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
    maxOfN: {
      title: 'Maximum of n numbers algorithm',
      explanation: 'The algorithm of determining the maximum out of n numbers assumes the first element as maximum.<br />Then it repeatedly compares each element with max.<br />If the element is greater than max, then we update the value of maximum.<br />At the end of the algorithm, max will hold the largest number from the list.',
    },
  },
};
