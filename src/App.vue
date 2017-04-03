<template>
  <div>
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link class="item" to="/allPatterns">全部花型</router-link>
      </div>
      <div class="tab-item">
        <router-link class="item" to="/supply">厂家供应</router-link> 
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header';
export default {
  components: {
    vHeader: header
  }
};
</script>

<style lang="stylus">
  @import './common/stylus/index.styl';
  .tab
    display flex
    box-sizing border-box
    height 40px
    line-height 40px
    background #fff
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex 1
      text-align center
      color #333
      font-size 14px
      .item
        display inline-block
        height 40px
        box-sizing border-box
        &.active
          color #4c93fd
          border-bottom 2px solid #4c93fd
</style>
