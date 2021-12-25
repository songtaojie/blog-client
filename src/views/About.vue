<template>
  <div class="about" v-wechat-title="this.title">
    <hx-header activeIndex="/about"></hx-header>
    <div class="container-fluid hx-container pt-3">
      <el-breadcrumb class="hx-breadcrumb hx-bg-color" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>关于我</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="d-flex hx-bg-color">
        <div></div>
        <div>
          <p>
            Hi，我是陈大剩，一个位90后草根站长，一位户外旅行爱好者，一位持续学习者，一名PHP程序猿^_^。
            Hi，我是陈大剩
            大学毕业开始入坑，不知不觉已经从事PHP工作三年了。但是这对门世界上最好的语言的热爱依然不减，因为它是有趣而强大的，我还有很长的路要走！这三年已经习惯了朝7晚1的生活，也因此做了很多的项目，企业官网，商城，小程序，微信开发等等。有一些进步，但是总体提升的速度还是很缓慢，互联网的知识太多，不学习总感觉自己会退步，一定会加倍努力学习！
            做这个博客断断续续花了一年多，从设计到前端展示再到后台都是自己亲力亲为，非常感给我博客提前意见的你们，谢谢！希望从现在开始能建立一个比较完整博客系统，并记录工作上遇到的问题和生活的点滴一起和大家分享，共同进步！
            现在阶段博客还有许多功能未完善，我和把所有的功能都慢慢完善起来，并记录完善日志；与此同时我也会将我的博客整理出来，变成开源项目，供大家研究和测试！
            如果有朋友有问题请教或者发现Bug，可以加我左边的微信好友或者QQ好友，联系我！谢谢。
            2018年10月15日15:33:09
          </p>
          <h2>关于本站</h2>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HxHeader from '@/components/HxHeader.vue'
export default {
  name: 'view',
  data() {
    return {
      title: '海·星の博客-关于我'
    }
  },
  components: {
    HxHeader
  }
}
</script>
<style scoped>
</style>
