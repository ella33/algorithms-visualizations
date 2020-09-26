import { algorithms as roAlgorithms } from './ro';
import { algorithms as enAlgorithms } from './en';

const algorithms = {
  en: enAlgorithms,
  ro: roAlgorithms,
};

const getAlgorithmCommands = (locale, algo) => (
  algorithms[locale] ? algorithms[locale][algo] : []
);

export default getAlgorithmCommands;
