<template>
  <div v-wechat-title="this.title">
    <hx-header></hx-header>
    <div class="container-fluid hx-container d-flex pt-3">
      <article class="article-wrap bg-white flex-fill">
        <div class="article-header p-1">
          <h4 class="article-title">{{detail.title}}</h4>
          <div class="article-meta">
            <span>
              <i class="hx-icon-user"></i>
              {{detail.nickName}}
            </span>
            <span>
              <i class="hx-icon-clock hx-2x"></i>
              {{dateFormat(detail.publishDate,'yyyy-MM-dd HH:mm')}}
            </span>
            <span>
              <i class="hx-icon-eye hx-2x"></i>
              {{detail.readCount}}浏览
            </span>
            <span>
              <i class="hx-icon-comments-o hx-2x"></i>
              {{detail.cmtCount}}评论
            </span>
          </div>
        </div>
        <div class="article-content flex-fill">
          <!-- <md-view v-if="detail.isMarkDown" v-model="detail.content"></md-view>
          <ck-view v-else v-model="detail.content"></ck-view>-->
          <div v-html="detail.content"></div>
        </div>
      </article>
      <aside class="article-side ml-2 d-none d-md-block" style="width:25%">
        <!-- <div class="bg-white about-me px-3 py-2">
          <h2>博主简介</h2>
          <ul>
            <i>
              <img src="/skin/show/images/4.jpg" />
            </i>
            <p>
              <strong>宋</strong>，一个90后帅气小伙！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。
            </p>
          </ul>
        </div>-->
        <!-- <div class="bg-white px-3 py-2"></div> -->
      </aside>
    </div>
  </div>
</template>

<script>
import HxHeader from '@/components/HxHeader.vue'
// import MdView from './MdView'
// import CkView from './CkView'
import { dateFormat, isEmpty } from '../../common/'
import { blogApi } from '../../api'
export default {
  name: 'view',
  data() {
    return {
      title: '海·星の博客',
      id: this.$route.params.id,
      detail: {}
    }
  },
  components: {
    HxHeader
    // MdView,
    // CkView
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
.article-header {
  border-bottom: 1px solid #eee;
  .article-title {
    font-size: 1.5em;
    font-weight: normal;
    padding: 1.2rem 0;
    color: #242525;
  }
  .article-meta {
    color: #999;
    i {
      vertical-align: middle;
      padding-bottom: 0.1rem;
    }
  }
}
.article-wrap {
  background: rgb(255, 255, 255);
  border: 1px solid rgba(221, 221, 221, 0.28);
  padding: 0 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  -webkit-box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
  box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
}
.article-content {
  font-size: 16px;
  color: #4d4d4d;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 16px;
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