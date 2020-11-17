// 主页面
<template>
  <div class="container">
    <div class="banner-wrap">
      <div class="banner">
        <div class="arrow-wrap">
          <i class="iconfont icon-chevrondown arrow"></i>
        </div>
      </div>
      <Wave></Wave>
    </div>
    <div class="content">
      <div class="content-top">
        <Divider icon="icon-anchor">START:DASH!!</Divider>
        <div class="card-wrap">
          <Card
            title="这里是标题"
            content="乌拉~"
            @click.native="jumpTo('article-id', 1)"
          >
            <img src="../assets/img/banner.png" />
          </Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <div class="content-main">
        <Divider>START:!!</Divider>
        <!-- eslint-disable vue/attribute-hyphenation  -->
        <MaxComment
          v-for="(item, index) in artilceList"
          :key="index"
          :title="item.title"
          :content="item.desc"
          :category="item.type.typeName"
          :comments="item.comments"
          :time="item.createdAt"
          :views="item.views"
          :imgUrl="item.imgUrl"
          :direction="index % 2 === 1 ? 'reverse' : 'row'"
          @click.native="jumpTo('article-id', item._id)"
        >
        </MaxComment>
      </div>
      <Empty></Empty>
    </div>
  </div>
</template>

<script>
// import Wave from '@/components/Wave';
// import Divider from '@/components/Divider';
// import Card from '@/components/Card';
import { ARTICLE_API } from '@/utils/api';
import { parseTime } from '@/utils/tool';

export default {
  name: 'Home',
  layout: 'blog',
  components: {
    // Wave,
    // Divider,
    // Card,
  },
  async asyncData(app) {
    const res = await app.$axios.get('/api/article/list', {
      params: { pageSize: 999 },
    });
    // const res = await ARTICLE_API.getArticles({ pageNum: 1 });
    // const res = await store.dispatch('init/getData');
    res.data.data.map((item) => {
      item.createdAt = parseTime(item.createdAt);
      item.comments = item.comments.length;
    });
    return {
      artilceList: res.data.data,
    };
  },
  data() {
    return {
      pageNum: 1,
    };
  },
  created() {},
  methods: {
    jumpTo(route, id) {
      this.$router.push({
        route,
        params: {
          id,
        },
      });
    },
    async load() {
      const res = await ARTICLE_API.getArticles({ pageNum: ++this.pageNum });
      res.data.map((item) => {
        item.createdAt = parseTime(item.createdAt);
      });
      this.artilceList.push(...res.data);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .banner-wrap {
    .banner {
      width: 100%;
      height: 937px;
      background-image: url('../assets/img/banner.png ');
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      .arrow-wrap {
        position: absolute;
        bottom: 80px;
        left: 50%;
        cursor: pointer;
        z-index: 90;
        animation: 2s linear 0s infinite normal none running float;
        .arrow {
          font-size: 32px;
          color: rgb(255, 255, 255);
          transform: scale(1.5, 1);
        }
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      z-index: 3;
      background-attachment: fixed;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAADAQMAAACDJEzCAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMAM8lDrC4AAAALSURBVAjXYwCBAwAAxgDB3319agAAAABJRU5ErkJggg==);
    }
    .wave {
      position: absolute;
      bottom: 0;
    }
  }
  .content {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0px 10px;
    .content-top {
      width: 100%;
      margin-top: 100px;
      .card-wrap {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
