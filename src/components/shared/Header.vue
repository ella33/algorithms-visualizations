<template>
  <div class="app-header-wrapper">
    <router-link to="/" v-slot="{ navigate }">
      <h1 @click="navigate">{{$t('GENERAL.title')}}</h1>
    </router-link>

    <div>
      <button @click="changeLanguage('en')">{{$t('HEADER.lang.en')}}</button>
      <button @click="changeLanguage('ro')">{{$t('HEADER.lang.ro')}}</button>
      <button @click="toggleMenu">{{$t('HEADER.explore')}}</button>
    </div>

    <div v-bind:class="['menu', { open: menuOpened }]">
      <router-link to="/swap">{{$t('ALGORITHMS.swap.title')}}</router-link>
      <router-link to="/maxn">{{$t('ALGORITHMS.maxOfN.title')}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    menuOpened: false,
  }),
  watch: {
    '$route'() {
      if (this.menuOpened) this.menuOpened = false;
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened;
    },
    changeLanguage(language) {
      this.$i18n.locale = language;
    },
  },
};
</script>

<style scoped>
.app-header-wrapper {
  padding: 20px;
  height: 85px;
  box-shadow: 0px 7px 5px 0px #EBEBEB;
  background-color: #BA7BA1;
  color: #F9E7E7;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button{
  color: #fff;
  padding: 5px 10px;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

h1 {
  cursor: pointer;
  margin: 0;
}

.menu {
  transform: translateX(100%);
  width: 350px;
  height: calc(100vh - 83px);
  background: #C28CAE;
  z-index: 5;
  position: absolute;
  top: 85px;
  right: 0;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
}

.menu a {
  color: #fff;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
}

.menu.open {
  transform: translateX(0);
  opacity: 1;
}
</style>