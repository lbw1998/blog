<template>
  <div class="message-wrap">
    <div class="img-wrap">
      <TopImg :title="'留言板'" :url="imgPath" type="simple"> </TopImg>
    </div>
    <div class="content">
      <!-- eslint-disable-next-line vue/attribute-hyphenation -->
      <Comment :count="10" type="message"></Comment>
    </div>
  </div>
</template>

<script>
import TopImg from '@/components/TopImg';
// import { parseTime } from '@/utils/tool';
// import { ARTICLE_API } from '@/utils/api';

export default {
  layout: 'blog',
  components: {
    TopImg,
  },
  data() {
    return {
      imgPath: require('../../assets/img/banner.png'),
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.message-wrap {
  .img-wrap {
    max-width: 900px;
    margin: 0 auto;
  }
  .content {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    .end {
      line-height: 30px;
      margin: 15px 0 22.5px;
      .iconfont {
        color: #d34836;
      }
    }
    .article-footer {
      padding: 20px 0;
      border-bottom: 1px dashed #ddd;
      border-top: 1px dashed #ddd;
      margin-top: 60px;
      height: 82px;
      box-sizing: border-box;
      .article-lincenses {
        text-align: center;
        padding-bottom: 5px;
        font-size: 14px;
        a {
          color: #b3b3b3;
          &:hover {
            color: #888;
          }
        }
      }
    }
    .squares {
      overflow: hidden;
      width: 100%;
      margin: 55px 0;
      background: #000;
      opacity: 0.8;
      display: flex;
      .half-wrap {
        position: relative;
        flex: 1;
        display: flex;
        z-index: 50;
        top: 0;
        left: 0;
        height: 100%;
        &:nth-of-type(2n) {
          .label {
            right: 40px;
            text-align: right;
          }
          .info {
            right: 40px;
            text-align: right;
          }
        }
        .half {
          width: 100%;
          height: 150px;
          padding: 55px 40px;
          box-sizing: border-box;
          &:hover .background {
            opacity: 0.6;
          }
          .background {
            position: absolute;
            z-index: 50;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.4;
            background-size: cover;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              pointer-events: none;
            }
          }
          .label {
            top: 40px;
            left: 40px;
            position: absolute;
            z-index: 100;
            font-size: 13px;
            display: block;
            text-transform: uppercase;
            color: #9ca09f;
          }
          .info {
            bottom: 40px;
            left: 40px;
            position: absolute;
            z-index: 98;
            h3 {
              font-size: 14px;
              font-weight: 400;
              line-height: 30px;
              margin: 20px 0;
              color: #fff;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              display: block;
            }
          }
        }
      }
    }
    pre {
      display: block;
      overflow-x: auto;
      background: #2b2b2b;
      color: #f8f8f2;
      padding: 0.5em;
    }
  }
}
</style>
