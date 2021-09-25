<template>
  <article class="d-flex mt-2 flex-column justify-content-start hx-blog">
    <div :key="item.id" class="mb-2 bg-white blog-item d-flex" v-for="item in blogList">
      <el-link class="hx-cover-img">
        <el-image :src="item.coverImgUrl" class="hx-fea-img"></el-image>
      </el-link>
      <div class="flex-fill">
        <div class="blog-item-title">
          <h4>
            <b-link :href="'/article/'+ item.userName+ '/' + item.id" target="_blank">{{item.title}}</b-link>
          </h4>
        </div>
        <div class="blog-item-summary blog-content-nowrap">
          <p>{{item.pureContent}}</p>
        </div>
        <div class="blog-item-user d-flex justify-content-start align-items-center">
          <div class="hx-avatar _32x32 hx-circle mr-2">
            <a>
              <img :src="item.avatarUrl ? attachApi + item.avatarUrl:avatarUrl" />
            </a>
          </div>
          <div class="mr-1">{{isEmpty(item.nickName)?item.userName:item.nickName}}</div>
          <div class="mr-1">{{dateFormat(item.publishDate)}}</div>
          <div class="blog-read ml-auto">
            <a>
              <span class="hx-text-gray">阅读</span>
              <span class="hx-text-blue">{{item.readCount}}</span>
            </a>
          </div>
          <div class="blog-comment ml-2">
            <a>
              <span class="hx-text-gray">评论</span>
              <span class="hx-text-blue">{{item.cmtCount}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import { dateFormat, isEmpty } from '../../common/'
import blogApi from '../../api/blog'
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
    dateFormat,
    getArticles: function () {
      var that = this
      blogApi.getArticles(that.queryParam)
        .then(res => {
          that.blogList = res.data.items
        })
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
.hx-cover-img {
  width: 210px;
  margin-bottom: 0;
  margin-right: 20px;
}
.hx-blog {
  .blog-item {
    padding: 1rem 1.5rem;
    background: rgb(255, 255, 255);
    border: 1px solid rgba(221, 221, 221, 0.28);
    border-radius: 8px;
    margin-bottom: 15px;
    -webkit-box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
    box-shadow: 0px 0px 10px -2px rgba(158, 158, 158, 0.2);
    .blog-item-title {
      width: 100%;
      a {
        color: #3d3d3d;
        font-weight: 700;
        &:hover {
          color: #4183c4;
          text-decoration: none;
        }
      }
    }
    .blog-item-summary {
      margin-bottom: 0.35rem;
      color: #999;
      font-size: 1em;
      line-height: 2.1rem;
    }
    .blog-content-nowrap {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .blog-item-user {
      margin: 0.5rem 0 0;
      color: rgba(0, 0, 0, 0.4);
      box-shadow: none;
      transition: color 0.1s ease;
    }
    .blog-comment,
    .blog-read {
      cursor: pointer;
      &:hover {
        span {
          color: #157dcf;
        }
      }
    }
  }
}
</style>