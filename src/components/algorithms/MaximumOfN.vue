<template>
  <AlgorithmBoard v-on:ready="onTimelineReady($event)" :onRun="onRunAlgorithm">
    <template #timeline>
      <div class="content-wrapper centered-items">
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

        <div class="max">{{max}}</div>
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
import { highlightCommand } from '../utils';

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
  }),
  created() {
    this.n = 5;
    this.x = [8, 0, 11, 3, 5];
  },
  methods: {
    onRunAlgorithm() {
      this.max = this.x[0];
    },
    async onTimelineReady(timeline) {
      this.activeCommand = 0;
      this.timeline = timeline;
      const algCommand = highlightCommand.bind({}, this.timeline);
      this.max = this.x[0];

      algCommand().add({
        targets: '.n',
        opacity: 1,
      });

      algCommand().add({
        targets: ['.box-queue', '.x-1'],
        opacity: 1,
      });

      algCommand().add({
        targets: '.max',
        opacity: 1,
        scale: 1,
      });

      for (let i = 1; i < this.n; i++) {
        const isGt = (this.x[i] > this.max);
        algCommand({ commandNumber: 4 });
        algCommand({ commandNumber: 5 }).add({
          targets: `.x-${i + 1}`,
          opacity: 1,
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
.box {
  display: inline-flex;
  opacity: 0;
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
  opacity: 0;
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
  opacity: 0;
  color: #fff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #D72483;
  transform: scale(0);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 4px 5px 0px #EBEBEB;
}

.variables {
  margin-bottom: 70px;
}
</style>