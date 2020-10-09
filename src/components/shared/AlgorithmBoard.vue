<template>
  <div class="board">
    <div class="content-wrapper">
      <div class="timeline">
        <div class="timeline-wrapper">
          <slot name="timeline"></slot>
        </div>
        <button v-on:click="runAlgorithm" :disabled="timelineInProgress">{{$t('GENERAL.run')}}</button>
      </div>
    </div>

    <div class="blackboard">
      <slot name="blackboard"></slot>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
const timelineDefaultConfig = {
  autoplay: false,
  duration: 1000,
  easing: 'easeOutExpo',
};

export default {
  name: 'AlgorithmBoard',
  data: () => ({
    timeline: null,
    playedOnce: false,
    timelineInProgress: false,
  }),
  props: {
    onRun: {
      type: Function,
      default: () => () => {},
    },
  },
  methods: {
    runAlgorithm() {
      this.$props.onRun();
      this.timelineInProgress = true;
      if (!this.playedOnce) {
        this.timeline.play();
        this.playedOnce = true;
      } else {
        this.timeline.restart();
      }
      this.timeline.finished.then(() => {
        this.timelineInProgress = false;
      });
    },
  },
  mounted() {
    this.timeline = anime.timeline(timelineDefaultConfig);
    this.$emit('ready', this.timeline);
  },
};
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  overflow: hidden;
}

.blackboard, .timeline-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.blackboard {
  background-image: linear-gradient(45deg, #434343, #000000);
  color: #fff;
  font-size: 1.25rem;
  overflow: auto;
}

.timeline-wrapper {
  flex: 1;
  padding: 20px;
  max-width: 100%;
}

.timeline {
  align-items: center;
  justify-content: center;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.timeline button {
  width: 300px;
  height: 60px;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  background-image: linear-gradient(45.34deg, #355C7D 5.66%, #6C5B7B 49.09%, #C06C84 93.43%);
  color: #fff;
  box-shadow: 6px -2px 5px 0px #EBEBEB;
}

.timeline button:disabled {
  opacity: 0.7;
}

.hint {
  font-size: 0.75rem;
}

@media screen and (max-width: 960px) {
  .board {
    grid-template-columns: 1fr;
  }

  .timeline {
    grid-row: 1;
  }

  .blackboard {
    display: none;
  }
}
</style>