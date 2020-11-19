<template>
  <ul class="comment-wrap">
    <li class="comment">
      <div class="content-wrap">
        <div class="contents">
          <div class="profile">
            <img :src="imgUrl" class="avatar" />
          </div>
        </div>
        <div class="commentinfo">
          <section class="commeta">
            <div class="left">
              <h4 class="author">aLiEz</h4>
            </div>
            <div class="right">
              <div class="info">
                <span class="time"> 发布于 4 天前 </span>
                <span class="referrer">（来自: 北京市 移动）</span>
              </div>
            </div>
          </section>
        </div>
        <div class="body">
          <p>
            <span class="comment-at">@aLIEz</span>
            {{ content }}
          </p>
        </div>
      </div>
      <slot></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-wrap {
  margin: 0 auto 30px;
  width: 100%;
  .comment {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    overflow: hidden;
    .content-wrap {
      float: right;
      width: 100%;
      padding: 0;
      &:hover img.avatar {
        transform: rotate(360deg);
      }
      .contents {
        width: 100%;
        .profile {
          margin-right: 10px;
          margin-top: 5px;
          float: left;
          img.avatar {
            width: 40px;
            height: 40px;
            border-radius: 100%;
            transition: all ease 1s;
          }
        }
      }
      .commentinfo {
        .commeta {
          font-size: 16px;
          overflow: hidden;
          margin-bottom: 5px;
          text-transform: uppercase;
          color: #9499a8;
          margin-left: 50px;
          .left {
            .author {
              font-weight: 400;
              margin: 0;
              letter-spacing: 0px;
              text-transform: none;
              font-size: 15px;
              font-weight: 600;
              line-height: 24px;
              color: #fe9600;
            }
          }
          .right {
            margin-top: 2px;
            font-size: 12px;
            letter-spacing: 0px;
            text-transform: none;
            color: rgba(0, 0, 0, 0.35);
            .info {
              margin-top: 2px;
              font-size: 12px;
              letter-spacing: 0px;
              line-height: 20px;
              text-transform: none;
              color: rgba(0, 0, 0, 0.35);
            }
          }
        }
      }
      .body {
        line-height: 32px;
        color: #63686d;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        position: relative;
        p {
          font-size: 14px;
          line-height: 30px;
          margin-top: 15px;
          padding-bottom: 30px;
          padding-left: 3px;
          color: #63686d;
          .comment-at {
            color: #99ce00;
          }
        }
      }
    }
  }
  .comment-wrap {
    padding-left: 40px;
  }
  hr {
    height: 0;
    width: 100%;
    background: #eee;
    border: 0;
    margin: 40px 0;
  }
}
</style>
