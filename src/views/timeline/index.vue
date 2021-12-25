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
        <infinite-loading @infinite="infiniteHandler">
          <span class="my-4" slot="no-more">没有更多了</span>
          <span slot="no-results"></span>
        </infinite-loading>
      </div>
    </div>
  </div>
</template>

<script>
import HxHeader from '@/components/HxHeader.vue'
import { timeLineApi } from '../../api'
import { isEmpty } from '../../common'
import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: 'timeline',
  data() {
    return {
      title: '海·星の博客-时间戳',
      page: 1,
      activities: []
    }
  },
  components: {
    HxHeader,
    InfiniteLoading
  },
  methods: {
    isEmpty,
    infiniteHandler($state) {
      var that = this
      timeLineApi.getTimeLines(that.page)
        .then(res => {
          if (res.data.items.length > 0) {
            that.activities = that.activities.concat(res.data.items)
            if (res.data.hasNextPage) {
              $state.loaded()
            } else {
              if (that.page === 1) {
                $state.loaded()
              }
              $state.complete()
            }
            that.page += 1
          } else {
            $state.complete()
          }

        })
    }
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
::v-deep .el-timeline-item__node--large {
  width: 18px;
  height: 18px;
}
::v-deep .el-timeline-item__tail {
  border-color: #009688;
  left: 6px;
}
::v-deep .el-timeline-item__wrapper {
  background: rgb(248, 248, 248);
  padding: 8px 12px;
  border-radius: 5px;
  text-align: left;
  font-size: 14px;
  margin-left: 28px;
  width: 48%;
}
</style>