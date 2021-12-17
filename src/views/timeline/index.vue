<template>
  <div v-wechat-title="this.title">
    <hx-header></hx-header>
    <div class="container-fluid hx-container pt-3">
      <el-timeline>
        <el-timeline-item :key="index" :timestamp="activity.timestamp" v-for="(activity, index) in activities">
          <span v-if="isEmpty(activity.link)">{{activity.content}}</span>
          <el-link :href="activity.link" :target="activity.target" v-else>{{activity.content}}</el-link>
        </el-timeline-item>
      </el-timeline>
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
</style>