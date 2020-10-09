<template>
  <AlgorithmBoard v-on:ready="onTimelineReady($event)">
    <template #timeline>
      <div class="cups-container">
        <div class="cup a">a</div>
        <div class="cup b">b</div>
        <div class="cup aux">aux</div>
      </div>
    </template>

    <template #blackboard>
      <InstructionsPanel
        :algorithmName="algorithmName"
        :explanation="$t('ALGORITHMS.swap.explanation')"
        :title="$t('ALGORITHMS.swap.title')"
      />
    </template>
  </AlgorithmBoard>
</template>

<script>
import AlgorithmBoard from '../shared/AlgorithmBoard.vue';
import InstructionsPanel from '../shared/InstructionsPanel.vue';
import { ALGORITHMS } from '../../Constants';

export default {
  name: 'Swap',
  components: {
    AlgorithmBoard,
    InstructionsPanel,
  },
  data: () => ({
    commands: [],
    algorithmName: ALGORITHMS.swap,
  }),
  methods: {
    scheduleSwap(options) {
      const { command, from, to } = options;
      this.timeline.add({
        targets: command,
        duration: 300,
        backgroundColor: '#FDFDFC',
        color: '#252525',
      }).add({
        targets: from.target,
        keyframes: [
          { translateY: from.y },
          { translateX: from.x },
        ],
      }).add({
        targets: to.target,
        keyframes: [
          { translateY: to.y },
          { translateX: to.x },
        ],
      }).add({
        targets: from.target,
        translateY: 0,
      }).add({
        targets: to.target,
        translateY: 0,
      }).add({
        targets: from.target,
        duration: 300,
        backgroundColor: from.color,
      });

      if (to.color) {
        this.timeline.add({
          targets: to.target,
          duration: 300,
          backgroundColor: to.color,
        });
      }
    },
    onTimelineReady(timeline) {
      this.timeline = timeline;
      this.timeline.add({
        targets: '.cup',
        duration: 300,
        easing: 'cubicBezier(.5, .05, .1, .3)',
        keyframes: [
          { scale: 1.2 },
          { scale: 1 },
        ],
      });
      this.scheduleSwap({
        command: '.command-1',
        from: {
          target: '.aux',
          y: -110,
          x: -220,
          color: '#F36886',
        },
        to: {
          target: '.a',
          y: 110,
          x: 220,
        },
      });

      this.scheduleSwap({
        command: '.command-2',
        from: {
          target: '.a',
          y: -110,
          x: 110,
          color: '#67EACA',
        },
        to: {
          target: '.b',
          y: 110,
          x: 110,
        },
      });

      this.scheduleSwap({
        command: '.command-3',
        from: {
          target: '.b',
          y: -110,
          x: -110,
          color: '#F36886',
        },
        to: {
          target: '.aux',
          y: 110,
          x: 0,
          color: 'rgba(0, 0, 0, 0.3)',
        },
      });
    },
  },
}
</script>

<style scoped>
.cups-container {
  display: flex;
  flex-direction: row;
}

.cup {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 4px 5px 0px #EBEBEB;
}

.a {
  background-color: #F36886;
}

.b {
  background-color: #67EACA;
}

.aux {
  background-color: #6CD4FF;
}
</style>