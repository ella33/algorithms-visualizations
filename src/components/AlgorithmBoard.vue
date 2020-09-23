<template>
  <div class="main">
    <div class="content-wrapper">
      <div class="wrapper timeline">
        <slot name="timeline"></slot>

        <button v-on:click="runAlgorithm" :disabled="timelineInProgress">Run</button>
      </div>
    </div>

    <div class="wrapper blackboard">
      <slot name="blackboard"></slot>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'AlgorithmBoard',
  data: () => ({
    timeline: null,
    playedOnce: false,
    timelineInProgress: false,
  }),
  methods: {
    runAlgorithm() {
      this.timelineInProgress = true;
      if (!this.playedOnce) {
        this.timeline.play();
        this.playedOnce = false;
      } else {
        this.timeline.restart();
      }
      this.timeline.finished.then(() => {
        this.timelineInProgress = false;
      });
    },
  },
  mounted() {
    this.timeline = anime.timeline({
      autoplay: false,
      duration: 1000,
      easing: 'easeOutExpo',
    });
    this.$emit('ready', this.timeline);
  },
};
</script>

<style scoped>
.blackboard {
  background-image: linear-gradient(45deg, #434343, #000000);
  color: #fff;
  font-size: 1.25rem;
  flex-direction: column;
}

.command {
  padding: 5px 10px;
  border-radius: 5px;
}

.timeline button {
  position: fixed;
  bottom: 0;
  width: 300px;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  background-image: linear-gradient(45deg, #ff512f, #f09819);
  color: #fff;
  box-shadow: 6px 4px 5px 0px #EBEBEB;
}

.timeline button:disabled {
  opacity: 0.7;
}

.hint {
  font-size: 0.75rem;
}
</style>