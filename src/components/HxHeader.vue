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
        <el-menu-item index="/index">资源分享</el-menu-item>
        <el-menu-item index="/timeline">点点滴滴</el-menu-item>
        <el-menu-item index="/index">关于本站</el-menu-item>
      </el-menu>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    var that = this

    return {
      editRoute: {
        name: 'edit',
        params: {
          useMdEdit: that.$store.getters.user.useMdEdit
        }
      },
      logo: require('@/assets/images/logo.png'),
      activeIndex: '/',
      colClassShow: false,
      dropClassShow: false,
      colVisible: false,
      screenWidth: document.body.clientWidth // 屏幕宽度
    }
  },
  methods: {
  },
  mounted() {
    // const $col = this.$refs.collapse
    const that = this
    // const $col = this.$refs.collapse
    const $dropdown = this.$refs.dropdown
    window.onresize = function () {
      that.screenWidth = document.body.clientWidth
      that.colVisible = false
      if ($dropdown && $dropdown.visible) $dropdown.visible = false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
