<template>
  <div v-wechat-title="this.title">
    <hx-header activeIndex="/timeline"></hx-header>
    <div class="container-fluid hx-container pt-3">
      <el-breadcrumb class="hx-breadcrumb hx-bg-color" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>点点滴滴</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="hx-timeline hx-bg-color">
        <el-timeline>
          <el-timeline-item
            :key="index"
            :timestamp="activity.timestamp"
            color="#009688"
            icon="el-icon-time"
            size="large"
            v-for="(activity, index) in activities"
          >
            <span v-if="isEmpty(activity.link)">{{activity.content}}</span>
            <el-link :href="activity.link" :target="activity.target" v-else>{{activity.content}}</el-link>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import HxHeader from '@/components/HxHeader.vue'
import { timeLineApi } from '../../api'
import { isEmpty } from '../../common'
export default {
  name: 'timeline',
  data() {
    return {
      title: '海·星の博客-时间戳',
      page: 0,
      activities: []
    }
  },
  components: {
    HxHeader
  },
  methods: {
    isEmpty,
    getTimeLines(page) {
      var that = this
      timeLineApi.getTimeLines(page)
        .then(res => {
          if (res && res.succeeded) {
            that.activities = res.data.items
          }
        })
    }
  },
  created: function () {
    this.getTimeLines(0)
  }
}
</script>
<style lang="scss" scoped>
.hx-timeline {
  border: 1px solid rgba(221, 221, 221, 0.28);
  padding: 25px;
  border-radius: 6px;
  -webkit-box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
  box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
}
// ::v-deep .el-timeline-item__timestamp.is-top {
//   position: absolute;
//   left: -117px;
//   top: -3px;
//   color: #333333;
// }
// ::v-deep .el-timeline-item__timestamp.is-bottom {
//   position: absolute;
//   left: -117px;
//   top: -3px;
//   color: #333333;
// }
// ::v-deep .el-timeline {
//   padding-left: 150px;
// }
::v-deep .el-timeline-item__node--large {
  width: 18px;
  height: 18px;
}
::v-deep .el-timeline-item__tail {
  border-color: #009688;
  left: 6px;
}
</style>