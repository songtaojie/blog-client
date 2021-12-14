<template>
  <div v-wechat-title="this.title">
    <hx-header></hx-header>
    <div class="container-fluid hx-container d-flex pt-3">
      <div class="flex-fill">
        <div class="hx-carousel">
          <hx-carousel :Items="imgItems"></hx-carousel>
        </div>
        <!-- 通知公告 -->
        <hx-notice :MsgItems="noticeItems"></hx-notice>
        <div>
          <hx-article></hx-article>
        </div>
      </div>
      <aside class="pl-3 hx-aside d-none d-md-block">
        <div class="hx-card">
          <hx-card></hx-card>
        </div>
        <!-- 标签 -->
        <div class="hx-tag" v-if="tagItems.length > 0">
          <div class="hx-tag__header">
            <i class="el-icon-collection-tag hx-2x"></i>
            标签云
          </div>
          <div class="hx-tag__body d-flex flex-wrap">
            <el-tag :key="index" :style="getTagStyle(item)" class="m-1" size="medium" v-for="(item, index) in tagItems">{{ item.name }}</el-tag>
          </div>
        </div>
        <!-- 友情链接 -->
        <div class="hx-friendlink" v-if="friendlinkItems.length > 0">
          <div class="hx-friendlink__header">
            <i class="el-icon-share hx-2x"></i>
            友情链接
          </div>
          <div class="hx-friendlink__body d-flex flex-wrap">
            <el-link :href="item.link" :key="index" :underline="false" class="mr-3" target="_blank" v-for="(item, index) in friendlinkItems">
              <!-- <img :src="item.logo" v-if="item.logo" /> -->
              {{item.siteName}}
            </el-link>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
import HxHeader from '@/components/HxHeader.vue'
import HxCarousel from '@/components/HxCarousel.vue'
import HxNotice from '@/components/HxNotice.vue'
import HxCard from './Card'
import HxArticle from './Article'
import { homeApi } from '../../api'
export default {
  data() {
    return {
      title: '海·星の博客',
      list: 1,
      imgItems: [
        {
          src: 'https://picsum.photos/1024/480/?image=10'
        }
      ],
      noticeItems: [],
      tagItems: [],
      friendlinkItems: []
    }
  },
  components: {
    HxHeader,
    HxCarousel,
    HxCard,
    HxArticle,
    HxNotice
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
      if (data.tags && data.tags.length > 0) {
        that.tagItems = data.tags
      }
      if (data.friendLinks && data.friendLinks.length > 0) {
        that.friendlinkItems = data.friendLinks
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.hx-carousel {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba($color: #000000, $alpha: 0.03);
  background: #fefefe;
  padding: 1rem 1rem;
  /deep/ img {
    border-radius: 8px;
  }
}
.hx-card {
  background: #fff;
  padding: 0 0 10px 0px;
  border-radius: 8px;
  margin-bottom: 15px;
  -webkit-box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
  box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
}
.carousel-thumbnail {
  a {
    overflow: hidden;
    height: 100%;

    img {
      opacity: 0.75;
    }

    &:hover {
      img {
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }
}
.carousel-thumbnail a img,
.carousel-item img {
  height: 100%;
  width: 100%;
  -moz-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  transition: all 0.5s;
}

.hx-friendlink,
.hx-tag {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0 20px;
  margin-bottom: 15px;

  .hx-friendlink__header,
  .hx-tag__header {
    padding: 18px 0;
    border-bottom: 1px solid #009688;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .hx-friendlink__body,
  .hx-tag__body {
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