<template>
  <!--我这个需求是有消息时才会让这个功能显示，所以使用了v-if-->
  <div class="hx-notice bs-sysMsg" v-if="MsgItems.length > 0">
    <i class="el-alert__icon el-icon-message-solid"></i>
    <div class="hx-notice__content">
      <el-carousel :autoplay="true" direction="vertical" height="20px" indicator-position="none">
        <el-carousel-item :key="item.id" v-for="item in MsgItems">
          <a
            :class="item.link?'underline':''"
            :href="item.link?item.link:'javascript:void(0)'"
            :target="item.link?item.target:'_self'"
            class="hx-notice__item"
          >{{item.title}}</a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HxNotice',
  props: {
    // 消息轮播的
    MsgItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // 滚屏消息
      systemMsg: [
        { id: 1, title: '入主白宫近10日 拜登做了10件大事' },
        { id: 2, title: '全民带货？小红书外链淘宝权限将大范围开放' },
        { id: 3, title: '贾跃亭FF将在纳斯达克上市 股票代码为FFIE' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
/*轮翻消息*/
.hx-notice {
  position: relative;
  display: flex;
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 10px;
  border-radius: 2px;
  color: #e6a23c;
  background-color: #fdf6ec;
  overflow: hidden;
  opacity: 1;
  align-items: center;
  transition: opacity 0.2s;
  .hx-notice__content {
    display: table-cell;
    padding: 0 8px;
    width: 100%;
    a.hx-notice__item {
      color: #e6a23c;
      font-size: 14px;
      opacity: 0.75;
    }
    a.underline {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>