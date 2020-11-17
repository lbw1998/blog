<template>
  <div class="article-wrap">
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
    <div class="content">
      <!-- eslint-disable vue/no-v-html  -->
      <div class="content-main markdown-body" v-html="info.article_html"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';
import hljs from 'highlight.js';
import TopImg from '@/components/TopImg';
import { parseTime } from '@/utils/tool';
// import 'highlight.js/styles/googlecode.css';
import 'github-markdown-css';
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
      },
    };
  },
  data() {
    return {
      imgPath: require('../../assets/img/banner.png'),
    };
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
        // {
        //   rel: 'stylesheet',
        //   href:
        //     'https://cdn.bootcdn.net/ajax/libs/github-markdown-css/4.0.0/github-markdown.css',
        // },
      ],
    };
  },
};
</script>

<style lang="scss">
.content {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  pre {
    display: block;
    overflow-x: auto;
    background: #2b2b2b;
    color: #f8f8f2;
    padding: 0.5em;
  }
}
</style>
