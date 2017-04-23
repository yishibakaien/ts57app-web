<template>
  <div class="login">
    I am login.
    <div>aaaaa</div>
    <slot name="slot1">bbbb-slot</slot>
    <slot name="slot2">xxxx-slot</slot>
    <div>ccccc</div>
    <button @click.stop.prevent="send">子组件发送数据</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: '我是子组件数据'
        };
    },
    methods: {
        send() {
            this.$emit('child-msg', this.message);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

</style>
