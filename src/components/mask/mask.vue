<template>
    <div class="login-mask">
        <transition name="fade">
            <div v-if="showMask" class="mask" @click="isShow">
                <slot>我是mask:{{msg}}</slot>
            </div>
        </transition>
        <transition name="slide">
            <div v-if="showMask" class="login-wrapper">
                <login @child-msg="get">
                    <a slot="slot2">呵呵</a>
                </login>
            </div>
        </transition>
    </div>
</template>

<script>
import login from '../login/login';
export default {
    data() {
        return {
            showMask: true,
            msg: ''
        };
    },
    methods: {
        get(msg) {
            this.msg = msg;
        },
        isShow() {
            this.showMask = !this.showMask;
        }
    },
    components: {
        login
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .mask 
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        z-index 100
        background rgba(7,17,27, 0.3)
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
