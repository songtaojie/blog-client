<template>
  <article class="d-flex mt-2 flex-column justify-content-start hx-article">
    <div :key="item.id" class="mb-2 bg-white hx-article-item d-flex" v-for="item in blogList">
      <a class="hx-article-cover my-auto d-none d-sm-block">
        <el-image :src="item.coverImgUrl" class="hx-fea-img"></el-image>
      </a>
      <div class="flex-fill hx-article-abstract">
        <div class="hx-article-title d-flex">
          <el-tag class="m-1" effect="dark" size="small" v-if="item.isTop">置顶</el-tag>
          <el-tag
            :type="item.blogType === 1?'warning':item.blogType === 2?'info':'danger'"
            class="m-1"
            effect="dark"
            size="small"
          >{{item.blogType === 1?"转载":item.blogType === 2?"翻译":"原创"}}</el-tag>
          <h4>
            <el-link :href="'/article/'+ item.id" :underline="false" target="_blank">{{item.title}}</el-link>
          </h4>
        </div>
        <div class="hx-article-content">
          <p>{{item.pureContent}}</p>
        </div>
        <div class="hx-article-footer d-flex justify-content-start align-items-center">
          <el-avatar :src="item.avatarUrl" class="mr-2" size="small"></el-avatar>
          <div class="mr-1">{{item.publisher}}</div>
          <div class="mr-1">
            <i class="hx-icon-clock hx-2x"></i>
            {{item.publishDate_V}}
          </div>
          <div class="mx-1">
            <span :key="tag.id" :style="getTagStyle(tag)" class="tag mr-1" v-for="tag in item.tags">{{tag.name}}</span>
          </div>
          <div class="hx-article-read ml-auto">
            <a href="#">
              <i class="el-icon-view hx-2x"></i>
              {{item.readCount}}
            </a>
          </div>
          <div class="hx-article-comment ml-2">
            <a href="#">
              <i class="el-icon-chat-dot-round hx-2x"></i>
              {{item.cmtCount}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import { isEmpty } from '../../common'
import { blogApi } from '../../api'
export default {
  name: 'HxArticle',
  data() {
    return {
      attachApi: process.env.VUE_APP_ATTACH_API,
      avatarUrl: require('../../assets/images/avatar1_small.jpg'),
      blogList: [],
      queryParam: {
        PageIndex: 0,
        PageSize: 2,
        SortKey: '',
        SortType: 0
      }
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    isEmpty,
    getArticles: function () {
      var that = this
      blogApi.getArticles(that.queryParam)
        .then(res => {
          that.blogList = res.data.items
        })
    },
    getTagStyle(tag) {
      return {
        'background-color': tag.bgColor,
        'border-color': tag.bgColor,
        'color': '#FFFFFF'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.hx-fea-img {
  position: relative;
  display: block;
  overflow: hidden;
  padding: 0;
  border-radius: 6px;
  /deep/img {
    -moz-transition: ease-in-out 0.3s;
    -webkit-transition: ease-in-out 0.3s;
    -o-transition: ease-in-out 0.3s;
    -ms-transition: ease-in-out 0.3s;
    transition: ease-in-out 0.3s;
  }
  &:hover {
    /deep/img {
      transition: All 0.7s ease;
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -o-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
}
.hx-article-cover {
  max-width: 210px;
  max-height: 150px;
  margin-bottom: 0;
  margin-right: 20px;
}
.hx-article {
  .hx-article-item {
    padding: 1rem 1.5rem;
    background: rgb(255, 255, 255);
    border: 1px solid rgba(221, 221, 221, 0.28);
    border-radius: 8px;
    margin-bottom: 15px;
    -webkit-box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
    box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
    .hx-article-title {
      width: 100%;
      a {
        color: #3d3d3d;
        font-weight: 700;
        font-size: inherit;
        &:hover {
          color: #4183c4;
          text-decoration: none;
        }
      }
    }
    .hx-article-content {
      margin-bottom: 0.35rem;
      color: #999;
      font-size: 1em;
      line-height: 2em;
      p {
        margin-bottom: 0;
        font-size: 14px;
        color: #566573;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }
    }
    .hx-article-footer {
      margin: 0.5rem 0 0;
      color: rgba(0, 0, 0, 0.4);
      box-shadow: none;
      transition: color 0.1s ease;
      .tag {
        display: inline-block;
        padding: 0px 9px;
        border-radius: 10px;
        background: bisque;
      }
    }
  }
}
</style>