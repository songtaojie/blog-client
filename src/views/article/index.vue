<template>
  <div v-wechat-title="this.title">
    <hx-header activeIndex="/articles"></hx-header>
    <div class="container-fluid hx-container d-flex pt-3">
      <div class="flex-fill">
        <!-- 通知公告 -->
        <hx-notice :MsgItems="noticeItems"></hx-notice>
        <div>
          <hx-article></hx-article>
        </div>
      </div>
      <aside class="pl-3 hx-aside d-none d-md-block">
        <!-- 热点文章 -->
        <div class="hx-hot hx-bg-color" v-if="hotItems.length > 0">
          <div class="hx-hot__header">
            <i class="el-icon-rank hx-2x"></i>
            热点文章
          </div>
          <div class="hx-hot__body d-flex flex-wrap">
            <a :href="'/article/'+ item.id" :key="index" class="w-100" target="_blank" v-for="(item, index) in hotItems">
              <el-card :body-style="{ padding: '0px'}" class="mb-3 hx-bg-color" shadow="hover">
                <img :src="item.coverImgUrl" style="width:100%;display:block;" />
                <div style="padding: 14px;">
                  <span>{{item.title}}</span>
                </div>
              </el-card>
            </a>
          </div>
        </div>
        <!-- 标签 -->
        <hx-tag :TagItems="tagItems"></hx-tag>
      </aside>
    </div>
  </div>
</template>
<script>
import HxHeader from '@/components/HxHeader.vue'
import HxNotice from '@/components/HxNotice.vue'
import HxArticle from '../home/Article.vue'
import HxTag from '../home/Tag.vue'
import { homeApi } from '../../api'
export default {
  data() {
    return {
      title: '海·星の博客',
      list: 1,
      noticeItems: [],
      tagItems: [],
      hotItems: []
    }
  },
  components: {
    HxHeader,
    HxArticle,
    HxNotice,
    HxTag
  },
  methods: {
    getTagStyle(item) {
      return {
        'background-color': item.bgColor,
        'border-color': item.bgColor,
        'color': '#FFFFFF'
      }
    }
  },
  created() {
    var that = this
    homeApi.getAllData().then(res => {
      var data = res.data
      that.noticeItems = data.notices.map(r => {
        return { id: r.id, title: r.content, target: r.target, link: r.link }
      })
      if (data.banners && data.banners.length > 0) {
        that.imgItems = data.banners.map(r => {
          return { id: r.id, src: r.imgUrl, target: r.target, link: r.link, title: r.title }
        })
      }
      that.tagItems = data.tags || []
      that.hotItems = data.hots || []
    })
  }
}
</script>
<style lang="scss" scoped>
.hx-carousel {
  overflow: hidden;
  position: relative;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba($color: #000000, $alpha: 0.03);
  /deep/ img {
    border-radius: 8px;
  }
}
.hx-card {
  padding: 0 0 10px 0px;
  border-radius: 8px;
  margin-bottom: 15px;
  -webkit-box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
  box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
}

.hx-friendlink,
.hx-hot {
  border: 1px solid #ebeef5;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0 20px;
  margin-bottom: 15px;

  .hx-friendlink__header,
  .hx-hot__header {
    padding: 18px 0;
    border-bottom: 1px solid #009688;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .hx-friendlink__body,
  .hx-hot__body {
    width: 100%;
    padding: 20px 0;
  }
  .hx-friendlink__body {
    img {
      max-width: 100px;
      max-height: 40px;
    }
  }
}
</style>