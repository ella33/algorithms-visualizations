import { ALGORITHMS } from '../Constants';

const assign = '&#8592;';

export const algorithms = {
  [ALGORITHMS.swap]: [
    { command: `aux ${assign} a;` },
    { command: `a ${assign} b;` },
    { command: `b ${assign} aux;` },
  ],
  [ALGORITHMS.maxOfN]: [
    { command: 'citeste n;' },
    { command: 'citeste x;' },
    { command: `max ${assign} x;` },
    {
      command: `pentru i ${assign} 2,n executa`,
      block: [
        { command: 'citeste x; '},
        {
          command: 'daca (x > max) atunci',
          block: [
            { command: `max ${assign} x;` }
          ],
        },
        { command: 'sf_daca;' },
      ],
    },
    { command: 'sf_pentru;' },
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
      explanation: 'Algoritmul de determinare a maximului dintre n numere presupune ca primul numar citit este cel mai mare.<br />Apoi, itereaza si compara fiecare dintre celelalte numere citite cu maximul curent.<br />Daca numarul este mai mare, atunci se actualizeaza valoarea maximului.<br />La finalul algoritmului, max va contine cel mai mare numar citit dintre cele n valori.',
    },
  },
};
