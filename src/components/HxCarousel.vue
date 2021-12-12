
<template>
  <div v-if="ImgItems.length > 0">
    <el-carousel :interval="5000" height="350px">
      <el-carousel-item :key="index" v-for="(item, index) in ImgItems">
        <a :href="item.link" :target="item.target" v-if="item.link">
          <img :src="item.src" class="d-block img-fluid w-100 h-100" :title="item.title" />
        </a>
        <img :src="item.src" class="d-block img-fluid w-100 h-100" v-else />
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