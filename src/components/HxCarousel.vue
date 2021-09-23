
<template>
  <div>
    <el-carousel :interval="5000" height="350px">
      <el-carousel-item :key="item" v-for="item in ImgItems">
        <img :src="item.src" class="d-block img-fluid w-100 h-100" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'HxCarousel',
  props: {
    // 轮播图片的集合
    Items: {
      type: Array,
      required: true
    },
    // 是否有边框
    Border: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    ImgItems: function () {
      var that = this
      var imgItems = []
      if (!that.Items) return []
      that.Items.forEach(function (v, i) {
        v.Id = i
        imgItems.push(v)
      })

      return imgItems
    }
  }
}
</script>
<style lang="scss" scoped>
</style>