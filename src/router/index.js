import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Swap from '../components/algorithms/Swap.vue';
import MaximumOfN from '../components/algorithms/MaximumOfN.vue';

const DEFAULT_PAGE_TITLE = 'Animated algorithms';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/swap',
    name: 'Swap',
    component: Swap,
    meta: { title: 'Swap' },
  },
  {
    path: '/maxn',
    name: 'MaximumOfN',
    component: MaximumOfN,
    meta: { title: 'Maximum of n numbers' },
  },
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${DEFAULT_PAGE_TITLE} - ${to.meta.title}` : DEFAULT_PAGE_TITLE;
  next();
});

export default router;
