'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './types';
// import user from './user';

Vue.use(Vuex);

// export default new Vuex.Store({
//     strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
//     modules: {
//         user
//     }
// });

const store = new Vuex.Store({
    state: {
        userInfo: '',
        token: null,
        title: ''
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.token = data;
            state.token = data;
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token');
            state.token = null;
        },
        [types.TITLE]: (state, data) => {
            state.title = data;
        }
    }
});

export default {
    store
};
