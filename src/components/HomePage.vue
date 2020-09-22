<template>
  <div class="main">
    <div class="content-wrapper">
      <Header />
      <div class="wrapper timeline">
        <div class="cup a">a</div>
        <div class="cup b">b</div>
        <div class="cup c">c</div>

        <button v-on:click="runAlgorithm" :disabled="timelineInProgress">Run</button>
      </div>
    </div>

    <div class="wrapper blackboard">
      <h2>Swap algorithm</h2>
      <div class="hint">Swapping two variables refers to mutually exchanging the values of the variables.</div>
      <div class="hint">Given 2 variables a and b, the algorithm uses a third temporary variable c in order to exchange their values.</div>
      <div class="instructions-panel">
        <p class="command command-1">c = a;</p>
        <p class="command command-2">a = b;</p>
        <p class="command command-3">b = c;</p>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import Header from './Header.vue';

export default {
  name: 'HomePage',
  components: {
    Header,
  },
  data: () => ({
    timeline: null,
    playedOnce: false,
    timelineInProgress: false,
  }),
  methods: {
    scheduleSwap(options) {
      const { command, from, to } = options;

      this.timeline.add({
        targets: command,
        duration: 300,
        backgroundColor: '#F8B500',
      }).add({
        targets: from.target,
        translateY: from.y,
      }).add({
        targets: from.target,
        translateX: from.x,
      }).add({
        targets: to.target,
        translateY: to.y,
      }).add({
        targets: to.target,
        translateX: to.x,
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
        target: '.c',
        y: 110,
        x: 0,
        color: '#6CD4FF',
      },
    });
  },
}
</script>

<style scoped>
  .main {
    display: flex;
    height: 100%;
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

  .content-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .wrapper {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
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
    font-size: 1.25rem;
    border: 0;
    cursor: pointer;
    box-shadow: 6px 4px 5px 0px #EBEBEB;
  }

  .timeline button:disabled {
    opacity: 0.7;
  }

  .hint {
    font-size: 0.75rem;
  }
</style>
