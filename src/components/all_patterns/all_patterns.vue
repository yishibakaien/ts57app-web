<template>
  <div class="all-patterns">
    我是 all patterns.
    <!-- <router-link to="/allPatterns/login">登录</router-link>
    <button @click="loginToggle">showLogin</button>
    <div>这里等待子组件的数据：{{msg}}</div>
    <router-view></router-view>
    <transition name="fade">
        <div class="mask" @click.prevent.stop="loginToggle" v-if="isShowLogin">
        </div>
    </transition>
    <transition name="slide">
        <div v-if="isShowLogin" class="login-wrapper">
            <login @child-msg="get">
                <a slot="slot2">呵呵</a>
            </login>
        </div>
    </transition> -->
  </div>
</template>

<script>
import login from '../login/login';
export default {
    data() {
        return {
            msg: '',
            isShowLogin: false
        };
    },
    components: {
        login
    },
    methods: {
        get(msg) {
            this.msg = msg;
        },
        loginToggle() {
            this.isShowLogin = !this.isShowLogin;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
    .mask 
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        z-index 100
        background rgba(7,17,27, 0.6)
        &.fade-enter-active,&.fade-leave-active
            transition 0.5s
        &.fade-enter,&.fade-leave-active
            opacity 0
    .login-wrapper
        position absolute
        top 50%
        left 50%
        z-index 111
        width 200px
        height 200px
        text-align center
        transform translate3d(-50%, -50%, 0)
        background #fff
        &.slide-enter-active,&.slide-leave-active
            transition 0.5s
        &.slide-enter,&.slide-leave-active
            transform translate3d(-50%, 0, 0)
            opacity 0
            
</style>
