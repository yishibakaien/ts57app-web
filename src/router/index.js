import Vue from 'vue';
import Router from 'vue-router';

import store from '../store/store';
import * as types from '../store/types';

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
      needAuth: true,
      children: [
        {path: '/allPatterns/login', component: login}
      ]
    },
    {
      path: '/supply',
      component: supply
    }
];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'));
}

const router = new Router({
  linkActiveClass: 'active',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.needAuth) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

export default router;
