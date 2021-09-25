<template>
  <div>
    <div :style="{backgroundImage:`url(${img})`}" class="hx-about-me">
      <!-- <h2 class="mx-2 my-3 about-header">关于我</h2> -->
      <!-- <p>网名：演绎~陌路离殇</p>
      <p>职业：Web前端设计师、后端开发</p>
      <p>现居：河南省-郑州市</p>
      <p>Email：stjworkemail@163.com</p>-->
      <div class="user-bgif">
        <img alt="海·星の博客" height="80" src="//thirdqq.qlogo.cn/g?b=oidb&amp;k=oiaf7kiagGGgictQZwuk7KZxw&amp;s=640&amp;t=1555320187" width="80" />
        <div class="name">
          <h3>
            <a href="//wpa.qq.com/msgrd?v=3&amp;uin=229693666&amp;site=qq&amp;menu=yes" rel="nofollow" title="QQ联系我">
              海·星の博客
              <span class="autlv aut-1 vs-level">V</span>
            </a>
          </h3>
          <p>海·星の博客提供个人网站建设_制作zblog博客主题模板以及SEO排名优化的原创科技博客（Talklee.Com）</p>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-around hx-contact">
      <a class="about-info" href="/" target="_blank" title="网站地址">
        <i class="hx-icon-home hx-4x text-info"></i>
      </a>
      <a class="about-info" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=977601042@qq.com" target="_blank" title="邮箱">
        <i class="hx-icon-email hx-4x hx-text-orange"></i>
      </a>
      <a class="about-info" href="#" target="_blank" title="QQ">
        <i class="hx-icon-qq hx-4x text-info"></i>
      </a>
      <a class="about-info" href="#" target="_blank" title="微信">
        <i class="hx-icon-weixin hx-4x hx-text-green"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  data() {
    return {
      img: require('/src/assets/images/aside-author-bg.jpg')
    }
  }
}
</script>
<style lang="scss" scoped>
.hx-about-me {
  position: relative;
  z-index: 1;
  height: 125px;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 88px;
  background-size: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  &::before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, transparent, #fff);
  }
  .user-bgif {
    position: relative;
    padding-top: 50px;
    img {
      margin: 0 auto;
      display: block;
      width: 80px;
      height: 80px;
      border-radius: 99px;
      padding: 5px;
      background: rgba(255, 255, 255, 0.88);
    }
    .name {
      h3 {
        font-size: 100%;
      }
      padding: 0 20px;
      text-align: center;
      margin: 5px 0 10px;
      a:hover,
      a:focus {
        color: #4693e9;
        text-decoration: none;
        cursor: pointer;
      }
      p {
        margin-top: 5px;
        max-height: 40px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 20px;
      }
    }
  }
}
.hx-contact {
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 0px solid rgba(150, 150, 150, 0.1);
}
.aut-1 {
  background: #448ef6;
}
span.autlv {
  font-size: 10px;
  color: #fff;
  display: inline-block;
  vertical-align: text-top;
  font-weight: normal;
  border-radius: 2px;
  line-height: 1.3;
  padding: 0 4px;
  margin-right: 5px;
  letter-spacing: 0px;
  margin-top: 2px;
}
span.aut-1.vs-level {
  background-image: -webkit-linear-gradient(
    0deg,
    rgba(253, 165, 34, 0.9294117647058824) 0%,
    #fd4c4c 100%
  );
}
</style>