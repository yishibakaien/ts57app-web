import Vue from 'vue';
import Router from 'vue-router';
import allPatterns from '@/components/all_patterns/all_patterns';
import supply from '@/components/supply/supply';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/allPatterns'
    },
    {
      path: '/allPatterns',
      component: allPatterns
    },
    {
      path: '/supply',
      component: supply
    }
  ]
});
