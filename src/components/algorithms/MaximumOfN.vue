<template>
  <AlgorithmBoard v-on:ready="onTimelineReady($event)">
    <template #timeline>
    </template>

    <template #blackboard>
      <InstructionsPanel
        :algorithmName="algorithmName"
        :explanation="$t('ALGORITHMS.maxOfN.explanation')"
        :title="$t('ALGORITHMS.maxOfN.title')"
      />
    </template>
  </AlgorithmBoard>
</template>

<script>
import AlgorithmBoard from '../shared/AlgorithmBoard.vue';
import InstructionsPanel from '../shared/InstructionsPanel.vue';
import { ALGORITHMS } from '../../Constants';

export default {
  name: 'MaximumOfN',
  components: {
    AlgorithmBoard,
    InstructionsPanel,
  },
  data: () => ({
    algorithmName: ALGORITHMS.maxOfN,
  }),
  methods: {
    onTimelineReady() {
      /** TODO add animations */
    },
  },
};
</script>

<style scoped>

</style>