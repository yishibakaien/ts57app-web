<template>
  <div class="header">
    <div class="avatar-wrapper">
      <img class="avatar" src="" alt="">
    </div>
    <div class="content-wrapper">
      <div class="content">
        <div class="title">
          <span class="tag factory"></span><span class="name">福建坐视布管网络科技有限公司福建坐视布管网络科技有限公司</span>
        </div>
        <div class="desc">
          主营：面料、大边、小边、睫毛
        </div>
      </div>
    </div>
    <div class="star-wrapper">
      <div class="pageview">
        <div class="number">1000</div>
        <div class="text">访问量</div>
      </div>
      <div class="star">★</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .header
    position relative
    display flex
    height 76px
    width 100%
    padding 8px 15px
    overflow hidden
    color #fff
    background #ccc
    .avatar-wrapper
      flex 0 0 60px
      width 60px
      height 60px
      overflow hidden
      border-radius 6px
      background #ff7011
      .avatar
        display inline-block
        width 100%
        height 100%
        border-radius 6px
    .content-wrapper
      flex 1
      height 100%
      // background #999
      overflow hidden
      .content
        position relative
        top 50%
        transform translateY(-50%)
        margin-left 10px
        
        .title
          padding-right 16px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        
          .tag
            margin-right 6px
            vertical-align top
          .name
            height 16px
            line-height 16px
            vertical-align top
            font-size 14px
        .desc
          line-height 16px
          font-size 11px
          color #f2f2f2
    .star-wrapper
      flex 0 0 67px
      width 67px
      height 100%
      width 67px
      color #fff
      font-size 0
      .pageview
        display inline-block
        vertical-align top
        .number,.text
          height 30px
          line-height 30px
          font-size 11px
      .star
        display inline-block
        vertical-align top
        height 60px
        line-height 60px
        font-size 30px
        color #ff7011
        
</style>
