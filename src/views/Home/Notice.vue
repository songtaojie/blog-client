<template>
  <!--我这个需求是有消息时才会让这个功能显示，所以使用了v-if-->
  <div class="bs-sysMsg" v-if="systemMsg.length > 0">
    <i class="el-alert__icon el-icon-message-solid"></i>
    <div class="msg__content">
      <el-carousel :autoplay="true" direction="vertical" height="20px" indicator-position="none">
        <el-carousel-item :key="item.id" v-for="item in systemMsg">
          <a class="item" href="javascript:void(0)">{{item.title}}</a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Notice',
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
.bs-sysMsg {
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
}
.bs-sysMsg .msg__content {
  display: table-cell;
  padding: 0 8px;
  width: 100%;
}
.bs-sysMsg .msg__content a.item {
  color: #e6a23c;
  font-size: 14px;
  opacity: 0.75;
}
.bs-sysMsg .msg__content a.item:hover {
  text-decoration: underline;
}
</style>