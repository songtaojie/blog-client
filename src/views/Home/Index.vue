<template>
  <div v-wechat-title="this.title">
    <hx-header></hx-header>
    <div class="container-fluid hx-container d-flex pt-3">
      <div class="flex-fill">
        <div class="hx-carousel">
          <hx-carousel :Items="ImgItems"></hx-carousel>
        </div>
        <div>
          <hx-article></hx-article>
        </div>
      </div>
      <div class="pl-3">
        <div class="hx-card">
          <hx-card></hx-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HxHeader from '@/components/HxHeader.vue'
import HxCarousel from '@/components/HxCarousel.vue'
import HxCard from './Card'
import HxArticle from './Article'
export default {
  data() {
    return {
      title: '海·星の博客',
      list: 1,
      ImgItems: [
        {
          src: 'https://picsum.photos/1024/480/?image=10'
        }
        // {
        //   src: 'https://picsum.photos/1024/480/?image=12'
        // }
      ]
    }
  },
  components: {
    HxHeader,
    HxCarousel,
    HxCard,
    HxArticle
  },
  methods: {
    send() {
      // const _that = this
      // _that.$api
      //   .get("api/values/1")
      //   .then(r => {
      //     debugger;
      //   })
      //   .catch(err => {
      //     _that.$api.ajaxError(err)
      //   });
    }
  }
  // created() {
  //   this.$api.get('api/values/1')
  //   .then(r=>{
  //     debugger
  //   }).catch(r=>{
  //     debugger
  //   })
  // }
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
</style>