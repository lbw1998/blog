<template>
  <article class="min-comment">
    <div class="comment-wrap">
      <div class="comment-avatar">
        <img v-if="url" :src="url" />
        <slot v-else></slot>
      </div>
      <h1 class="comment-title">
        我曾初始这世间
      </h1>
      <div class="comment-time">
        <i class="iconfont icon-time"></i>
        发布于 2020-07-7
      </div>
      <p class="comment-content">
        乌拉乌拉乌拉~~~
      </p>
      <div class="comment-tip">
        <div class="comnum">
          <span> <i class="iconfont icon-attention"></i>214 热度 </span>
        </div>
        <div class="views">
          <span class="comments-number">
            <i class="iconfont icon-mark"></i>6 评论
          </span>
        </div>
      </div>
    </div>
    <hr />
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题',
    },
    url: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.min-comment {
  animation: 0.5s ease 0s 1 normal none running post-list-show;
  opacity: 1;
  margin: 0px 0px 8%;
  position: relative;
  &:hover .comment-wrap .comment-tip {
    transform: translate3d(-230px, 0px, 0px);
    opacity: 1;
    visibility: visible;
  }
  .comment-wrap {
    .comment-avatar {
      position: absolute;
      margin-top: 10px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        padding: 2px;
        border: 1px solid rgb(218, 218, 218);
        position: relative;
      }
    }
    .comment-title {
      font-size: 20px;
      font-weight: 400;
      line-height: 50px;
      margin: 0px 0px 0px 17%;
      position: relative;
      z-index: 1;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 70%;
      color: rgb(80, 78, 78);
    }
    .comment-time {
      position: absolute;
      right: 0px;
      top: 16px;
      font-size: 12px;
      color: rgb(152, 152, 152);
      letter-spacing: 0px;
    }
    .comment-content {
      min-height: 60px;
      margin: 0px 0px 0px 17%;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.66);
      letter-spacing: 0px;
      line-height: 30px;
    }
    .comment-tip {
      margin-top: 10px;
      position: absolute;
      top: 20px;
      left: 0;
      opacity: 0;
      padding-top: 8px;
      border-top: 1px solid rgb(221, 221, 221);
      transform: translate3d(-150px, 0px, 0px);
      margin-left: 16%;
      visibility: hidden;
      transition: all 0.6s ease 0s;
      font-size: 100%;
      span {
        color: rgb(0, 0, 0);
        font-size: 13px;
        i {
          margin-top: 3px;
          margin-right: 10px;
          float: left;
        }
      }
      .comnum {
        float: left;
      }
    }
  }
  hr {
    width: 30%;
    height: 1px;
    margin: 20px auto 0px;
    border: 0px;
    background: rgb(239, 239, 239);
  }
}
</style>
