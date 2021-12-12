<template>
  <div class="hx-tag" v-if="TagItems.length > 0">
    <div class="hx-tag__header">
      <i class="el-icon-collection-tag hx-2x"></i>
      标签云
    </div>
    <div class="hx-tag__body d-flex flex-wrap">
      <el-tag :key="index" :style="getStyle(item)" class="m-1" size="medium" v-for="(item, index) in TagItems">{{ item.name }}</el-tag>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HxTags',
  props: {
    // 消息轮播的
    TagItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    getStyle(item) {
      return {
        'background-color': item.bgColor,
        'border-color': item.bgColor,
        'color': '#FFFFFF'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>