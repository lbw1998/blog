<template>
  <div class="category_wrap">
    <div class="category_content">
      <div class="center-blank"></div>
      <header class="content_header">
        <h1>搜索结果：{{ search }}</h1>
      </header>
      <div class="article_wrap">
        <Comment title="这里是标题" direction="row" content="乌拉~">
          <img src="../../assets/img/banner.png" />
        </Comment>
      </div>
      <Empty></Empty>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.category_wrap {
  .category_content {
    min-height: 600px;
    max-width: 900px;
    padding: 50px 10px 0px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, 0.8);
    animation: 1s ease 0s 1 normal none running main;
    .center-blank {
      padding-top: 75px;
      background-color: rgb(255, 255, 255);
    }
    .content_header {
      position: relative;
      text-align: center;
      margin-bottom: 50px;
      color: rgb(156, 156, 156);
      h1 {
        font-size: 20px;
        font-weight: 400;
        border: 1px dashed rgb(221, 221, 221);
        padding: 15px;
        color: rgb(130, 130, 130);
      }
    }
  }
}
</style>
