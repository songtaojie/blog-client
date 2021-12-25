<template>
  <div v-wechat-title="this.title">
    <hx-header></hx-header>
    <div class="container-fluid hx-container pt-3">
      <el-breadcrumb class="hx-breadcrumb hx-bg-color" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章专栏</el-breadcrumb-item>
        <el-breadcrumb-item>{{detail.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <main class="d-flex">
        <article class="hx-article-wrap hx-bg-color flex-fill">
          <h4 class="hx-article-title">{{detail.title}}</h4>
          <div class="hx-article-meta">
            <span>
              <i class="hx-icon-user"></i>
              {{detail.nickName}}
            </span>
            <span>
              <i class="hx-icon-clock hx-2x"></i>
              {{dateFormat(detail.publishDate,'yyyy-MM-dd HH:mm')}}
            </span>
            <span>
              <i class="el-icon-view hx-2x"></i>
              {{detail.readCount}}
            </span>
            <span>
              <i class="el-icon-chat-dot-round hx-2x"></i>
              {{detail.cmtCount}}
            </span>
          </div>
          <div class="hx-article-content flex-fill">
            <md-view class="content__inner" v-if="detail.isMarkDown" v-model="detail.content"></md-view>
            <div class="content__inner" v-else v-html="detail.content"></div>
          </div>
        </article>
        <aside class="article-side ml-2 d-none d-md-block" style="width:25%"></aside>
      </main>
    </div>
  </div>
</template>

<script>
import HxHeader from '@/components/HxHeader.vue'
import MdView from './MdView'
import { dateFormat, isEmpty } from '../../common/'
import { blogApi } from '../../api'
export default {
  name: 'view',
  data() {
    return {
      title: '海·星の博客',
      id: this.$route.params.id,
      detail: {
        isMarkDown: false
      }
    }
  },
  components: {
    HxHeader,
    MdView
  },
  methods: {
    dateFormat,
    isEmpty,
    findById() {
      var that = this
      blogApi.getDetail(that.id)
        .then(res => {
          if (res && res.succeeded) {
            that.detail = res.data
            this.title = this.detail.title
          }
        })
    }
  },
  watch: {
  },
  created: function () {
    this.findById()
  }
}
</script>
<style lang="scss" scoped>
.hx-article-title {
  font-size: 1.6em;
  font-weight: 700;
  margin: 1.2rem 0;
  color: #242525;
}
.hx-article-meta {
  color: #999;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  span:not(:first-child) {
    margin-left: 5px;
  }
  i {
    vertical-align: middle;
    padding-bottom: 0.1rem;
  }
}
.hx-article-wrap {
  border: 1px solid rgba(221, 221, 221, 0.28);
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 15px;
  -webkit-box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
  box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
}
.hx-article-content {
  font-size: 16px;
  color: #4d4d4d;
  line-height: 32px;
  ::v-deep p {
    text-indent: 2em;
    word-break: break-all;
  }
  ::v-deep img {
    max-width: 100%;
  }
}

.article-side {
  .about-me {
    h2 {
      color: #1f7994;
      font-size: 14px;
      line-height: 34px;
    }
  }
}
</style>