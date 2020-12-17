<template>
  <div class="article-wrap">
    <div class="img-wrap">
      <TopImg
        :title="info.title"
        :avatar="info.avatar"
        :author="info.author"
        :time="info.time"
        :url="info.imgUrl"
        :views="info.views"
        type="normal"
      >
      </TopImg>
    </div>
    <div class="content">
      <!-- eslint-disable vue/no-v-html  -->
      <div class="content-main markdown-body" v-html="info.article_html"></div>
      <p class="end">
        Q.E.D.
        <i class="iconfont icon-meetup"></i>
      </p>
      <footer class="article-footer">
        <div class="article-lincenses">
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
            target="_blank"
            rel="nofollow"
            ><i class="iconfont icon-CreativecommonsCC" aria-hidden="true"></i>
            知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a
          >
        </div>
      </footer>
      <div class="squares">
        <div v-if="record.prev" class="previous half-wrap">
          <nuxt-link
            class="half"
            :to="'/article/' + record.prev && record.prev._id"
          >
            <div class="background">
              <img :src="record.prev && record.prev.imgUrl" />
            </div>
            <span class="label">Previous Post</span>
            <div class="info">
              <h3>{{ record.prev && record.prev.title }}</h3>
            </div>
          </nuxt-link>
        </div>
        <div v-if="record.next" class="next half-wrap">
          <nuxt-link
            class="half"
            :to="'/article/' + record.next && record.next._id"
          >
            <div class="background">
              <img :src="record.next && record.next.imgUrl" />
            </div>
            <span class="label">Previous Post</span>
            <div class="info">
              <h3>{{ record.next && record.next.title }}</h3>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!-- eslint-disable-next-line vue/attribute-hyphenation -->
      <Comment :article-id="articleId" :count="info.count"></Comment>
    </div>
  </div>
</template>

<script>
import marked from 'marked';
import hljs from 'highlight.js';
import TopImg from '@/components/TopImg';
import { parseTime } from '@/utils/tool';
import { ARTICLE_API } from '@/utils/api';
// import 'highlight.js/styles/googlecode.css';
// import 'github-markdown-css';
// 导入代码高亮文件
// async function highlighthandle() {
//   await hljs;
//   const highlight = document.querySelectorAll('code,pre');
//   highlight.forEach((block) => {
//     hljs.highlightBlock(block);
//   });
// }
// highlighthandle();

export default {
  layout: 'blog',
  components: {
    TopImg,
  },
  async asyncData(app) {
    const { id } = app.route.params;
    let res = await app.$axios.get('/api/article/detail/' + id);
    res = res.data.data;
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight(code, lang) {
        return hljs.highlightAuto(code).value;
      },
    });
    return {
      info: {
        title: res.title,
        avatar: res.author.avatar,
        author: res.author.nickname,
        article_html: marked(res.article),
        time: parseTime(res.createdAt),
        imgUrl: res.imgUrl,
        views: res.views,
        count: res.count,
      },
      articleId: id,
    };
  },
  data() {
    return {
      imgPath: require('../../assets/img/banner.png'),
      record: {},
    };
  },
  mounted() {
    this.recentRecord();
  },
  methods: {
    async recentRecord() {
      const res = await ARTICLE_API.recentRecord({ id: this.articleId });
      this.record = res.data;
    },
  },
  head() {
    return {
      title: this.info.title,
      // script: [
      //   {
      //     src:
      //       'https://cdn.bootcdn.net/ajax/libs/highlight.js/10.3.2/highlight.min.js',
      //   },
      //   {
      //     innerHTML: 'hljs.initHighlightingOnLoad();',
      //     type: 'text/javascript',
      //     charset: 'utf-8',
      //   },
      // ],
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdn.bootcdn.net/ajax/libs/highlight.js/10.3.2/styles/a11y-dark.min.css',
        },
        {
          rel: 'stylesheet',
          href:
            'https://cdn.bootcdn.net/ajax/libs/github-markdown-css/4.0.0/github-markdown.css',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.article-wrap {
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
