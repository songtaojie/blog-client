<template>
  <div>
    <div class="hx-tag">
      <div class="hx-tag__header">
        <i class="el-icon-collection-tag hx-2x"></i>
        标签云
      </div>
      <div class="hx-tag__body d-flex flex-wrap">
        <el-tag :key="index" :style="getStyle(item)" class="m-1" size="medium" v-for="(item, index) in TagItems">{{ item.name }}</el-tag>
      </div>
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
.hx-tag {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0 15px;

  .hx-tag__header {
    padding: 18px 20px;
    border-bottom: 1px solid #009688;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .hx-tag__body {
    padding: 20px;
  }
}
</style>