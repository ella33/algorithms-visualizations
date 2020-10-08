<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/shared/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body, html {
  height: 100vh;
  width: 100%;
  margin: 0;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #252525;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main {
  display: flex;
  flex: 1;
}

@media screen and (max-width: 960px) {
  .main {
    display: block;
  }
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.full-height {
  height: 100%;
}

.full-flex-item {
  flex: 1;
}

.centered-items {
  align-items: center;
}

.wrapper {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

button {
  border: 0;
  cursor: pointer;
  font-size: 1.25rem;
  background: transparent;
  outline: none;
}
</style>
