<template>
  <AlgorithmBoard v-on:ready="onTimelineReady($event)" :onRun="onRunAlgorithm">
    <template #timeline>
      <div class="variables">
        <div class="box n">
          <div class="title">n:</div>
          <div class="content">{{n}}</div>
        </div>

        <div class="box box-queue">
          <div class="title">x:</div>
          <div class="content">
            <span :class="['x', `x-${index + 1}`]" v-for="(item, index) in x" :key="index">
              {{item}}
            </span>
          </div>
        </div>
      </div>

      <div class="bubble-container">
        <div class="current-x">
          <div class="bubble-x"></div>
          <div class="value">{{currentX}}</div>
        </div>
        <div class="max">max: {{max}}</div>
      </div>
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
import { highlightCommand, resetCommands } from '../utils';

export default {
  name: 'MaximumOfN',
  components: {
    AlgorithmBoard,
    InstructionsPanel,
  },
  data: () => ({
    algorithmName: ALGORITHMS.maxOfN,
    n: 0,
    x: [],
    max: 0,
    currentX: 0,
  }),
  created() {
    this.n = 5;
    this.x = [8, 0, 11, 20, 5];
  },
  methods: {
    onRunAlgorithm() {
      this.max = this.x[0];
    },
    async onTimelineReady(timeline) {
      this.activeCommand = 0;
      this.timeline = timeline;
      const algCommand = highlightCommand.bind({}, this.timeline);
      const resetAlgCommands = resetCommands.bind(null, this.timeline);
      this.max = this.x[0];

      algCommand().add({
        targets: '.n',
        opacity: 1,
      });

      algCommand().add({
        targets: ['.box-queue', '.x-1'],
        opacity: 1,
        begin: () => {
          this.currentX = this.x[0];
        }
      }).add({
        targets: '.current-x',
        duration: 100,
        opacity: 1,
      });

      algCommand().add({
        targets: '.max',
        opacity: 1,
        scale: 1,
      });

      for (let i = 1; i < this.n; i++) {
        const isGt = (this.x[i] > this.max);
        resetAlgCommands([4, 5, 6, 7, 8]);

        algCommand({ commandNumber: 4 });
        algCommand({ commandNumber: 5 }).add({
          targets: `.x-${i + 1}`,
          opacity: 1,
          duration: 100,
        }).add({
          targets: '.bubble-x',
          duration: 500,
          scale: this.x[i] ? Math.min((this.x[i] / this.max), 2) : 0,
          begin: () => {
            this.currentX = this.x[i];
          },
        });

        algCommand({ commandNumber: 6 });

        algCommand({
          commandNumber: isGt ? 7 : -1,
          animeOptions: {
            complete: () => {
              if (isGt) {
                this.max = this.x[i];
              }
            }
          }
        });
        algCommand({ commandNumber: isGt ? 8 : -1 });
      }

      algCommand({ commandNumber: 9 });
    },
  },
};
</script>

<style scoped>
.box, .x, .max, .current-x {
  opacity: 0;
}

.box {
  display: inline-flex;
  flex-direction: column;
  margin: 0 5px;
}

.box-queue .title {
  background-color: #20A4F3;
}

.box-queue .content {
  border: 1px solid #20A4F3;
}

.n {
  border: 1px solid #FFA630;
}

.title {
  color: #fff;
}

.n .title {
  background-color: #FFA630;
}

.title, .content {
  padding: 5px 10px;
}

.content {
  background-color: #FBFFFE;
  justify-content: center;
}

.x {
  border-right: 1px solid #20A4F3;
  padding: 0 5px;
}

.x:first-child {
  padding-left: 0;
}

.x:last-child {
  border-right: 0;
}

.max {
  color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #D72483;
  box-shadow: 6px 4px 5px 0px #EBEBEB;
}

.max, .current-x {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.current-x {
  position: relative;
}

.current-x .value {
  z-index: 33;
}

.current-x, .bubble-x {
  width: 100px;
  height: 100px;
  max-width: 200px;
}

.bubble-x {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #20A4F3;
  border-radius: 50%;
  box-shadow: 6px 4px 5px 0px #EBEBEB;
}

.variables {
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
}

.bubble-container {
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-column-gap: 30px;
  justify-items: center;
}

</style>