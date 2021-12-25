<template>
  <header class="fixed-top hx-header">
    <div class="d-flex hx-header__inner container-fluid">
      <div class="hx-logo mr-5">
        <el-link :underline="false">
          <el-image :src="logo"></el-image>
        </el-link>
      </div>
      <el-menu
        :default-active="activeIndex"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="d-flex flex-fill"
        mode="horizontal"
        router
        text-color="#fff"
      >
        <el-menu-item index="/">网站首页</el-menu-item>
        <el-menu-item :route="{ path: '/articles', query: { t: '0' } }" index="/articles">文章专栏</el-menu-item>
        <el-menu-item index="/index">资源分享</el-menu-item>
        <el-menu-item index="/timeline">点点滴滴</el-menu-item>
        <el-menu-item index="/about">关于我</el-menu-item>
      </el-menu>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HxHeader',
  props: {
    activeIndex: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {
      logo: require('@/assets/images/logo.png')
    }
  }
}
</script>

