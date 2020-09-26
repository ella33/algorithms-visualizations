<template>
  <AlgorithmBoard v-on:ready="onTimelineReady($event)">
    <template #timeline>
    </template>

    <template #blackboard>
      <InstructionsPanel :commands="commands" :hints="hints" :title="$t('ALGORITHMS.maxOfN')" />
    </template>
  </AlgorithmBoard>
</template>

<script>
import AlgorithmBoard from '../shared/AlgorithmBoard.vue';
import InstructionsPanel from '../shared/InstructionsPanel.vue';
import { flattenAlgorithm } from '../utils';

const algorithm = [
  { command: 'max = list[0];' },
  {
    command: 'for (i = 1; i < n; i++)',
    block: [
      {
        command: 'if (list[i] > max)',
        block: [
          { command: 'max = list[i];' }
        ],
      },
    ],
  },
];

const hints = [
  'The algorithm of determining the maximum out of n numbers assumes the first element as maximum.',
  'Then it repeatedly compares each element with max.',
  'If the element is greater than max, then we update the value of maximum.',
  'At the end of the algorithm, max will hold the largest number from the list.'
];

export default {
  name: 'MaximumOfN',
  components: {
    AlgorithmBoard,
    InstructionsPanel,
  },
  data: () => ({
    commands: [],
    hints: [],
  }),
  methods: {
    onTimelineReady() {
      this.commands = flattenAlgorithm(algorithm);
      this.hints = hints;
    },
  },
};
</script>

<style scoped>

</style>