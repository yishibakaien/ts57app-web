import Vue from 'vue';
import Router from 'vue-router';
import allPatterns from '@/components/all_patterns/all_patterns';
import supply from '@/components/supply/supply';
import login from '@/components/login/login';

Vue.use(Router);

const routes = [
    {
      path: '/',
      redirect: '/allPatterns'
    },
    {
      path: '/allPatterns',
      component: allPatterns,
      children: [
        {path: '/allPatterns/login', component: login}
      ]
    },
    {
      path: '/supply',
      component: supply
    }
];

export default new Router({
  linkActiveClass: 'active',
  routes
});
