import { ALGORITHMS } from '../Constants';

const assign = '&#8592;';

export const algorithms = {
  [ALGORITHMS.swap]: [
    { command: `aux${assign}a;` },
    { command: `a${assign}b;` },
    { command: `b${assign}aux;` },
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
    title: 'Algoritmi animați',
    run: 'Execută',
  },
  HOME: {
    description: 'Scopul acestui proiect este de a reprezenta execuția algoritmilor elementari prin animații  persoanele începătoare să înțeleagă ce sunt algoritmii și cum funcționează aceștia.',
  },
  HEADER: {
    explore: 'Explorează',
    lang: {
      'en': 'EN',
      'ro': 'RO',
    },
  },
  ALGORITHMS: {
    swap: {
      title: 'Algoritmul de interschimbare',
      explanation: 'Interschimbarea a 2-a variabile se referă la schimbul mutual de valori dintre cele două variabile. <br /> Date fiind 2 variabile a și b, algoritmul utilizează a treia variabilă temporară aux pentru a interschimba valorile. <br /> La sfârșitul algoritmului, variabila a va conține valoarea variabile b și variabila b va contine valoarea variabilei a.'
    },
    maxOfN: {
      title: 'Algoritmul de determinare a maximului dintre n numere',
      explanation: 'The algorithm of determining the maximum out of n numbers assumes the first element as maximum.<br />Then it repeatedly compares each element with max.<br />If the element is greater than max, then we update the value of maximum.<br />At the end of the algorithm, max will hold the largest number from the list.',
    },
  },
};
