<template>
  <AlgorithmBoard v-on:ready="scheduleSwaps($event)">
    <template #timeline>
      <div class="cup a">a</div>
      <div class="cup b">b</div>
      <div class="cup c">c</div>
    </template>

    <template #blackboard>
      <h2>Swap algorithm</h2>
      <div class="hint">Swapping two variables refers to mutually exchanging the values of the variables.</div>
      <div class="hint">Given 2 variables a and b, the algorithm uses a third temporary variable c in order to exchange their values.</div>
      <div class="hint">At the end of the algorithm, a will hold b's value and b will hold a's value.</div>
      <div class="instructions-panel">
        <p class="command command-1">c = a;</p>
        <p class="command command-2">a = b;</p>
        <p class="command command-3">b = c;</p>
      </div>
    </template>
  </AlgorithmBoard>
</template>

<script>
import AlgorithmBoard from '../AlgorithmBoard.vue';

export default {
  name: 'Swap',
  components: {
    AlgorithmBoard
  },
  methods: {
    scheduleSwap(options, timeline) {
      const { command, from, to } = options;

      timeline.add({
        targets: command,
        duration: 300,
        backgroundColor: '#F8B500',
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
        timeline.add({
          targets: to.target,
          duration: 300,
          backgroundColor: to.color,
        });
      }
    },
    scheduleSwaps(timeline) {
      timeline.add({
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
          target: '.c',
          y: -110,
          x: -220,
          color: '#F36886',
        },
        to: {
          target: '.a',
          y: 110,
          x: 220,
        },
      }, timeline);

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
      }, timeline);

      this.scheduleSwap({
        command: '.command-3',
        from: {
          target: '.b',
          y: -110,
          x: -110,
          color: '#F36886',
        },
        to: {
          target: '.c',
          y: 110,
          x: 0,
          color: 'rgba(0, 0, 0, 0.3)',
        },
      }, timeline);
    },
  },
}
</script>

<style scoped>
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

.c {
  background-color: #6CD4FF;
}

.command {
  padding: 5px 10px;
  border-radius: 5px;
}

.hint {
  font-size: 0.75rem;
}
</style>