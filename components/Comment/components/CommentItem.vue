<template>
  <ul class="comment-wrap">
    <li class="comment">
      <div class="content-wrap">
        <div class="contents">
          <div class="profile">
            <img :src="userinfo.avatar" class="avatar" />
          </div>
        </div>
        <div class="commentinfo">
          <section class="commeta">
            <div class="left">
              <h4 class="author">{{ userinfo.nickname }}</h4>
            </div>
            <div class="right">
              <div class="info">
                <span class="time"> 发布于 {{ parseTime(time) }} </span>
                <span class="referrer">（来自: {{ userinfo.address }}）</span>
                <span class="reply" @click="showComponent">REPLY</span>
              </div>
            </div>
          </section>
        </div>
        <div class="body">
          <p>
            <span v-if="toNickname" class="comment-at">@{{ toNickname }}</span>
            {{ content }}
          </p>
        </div>
      </div>
      <hr />
      <template v-if="show">
        <div class="cancel-reply" @click="cancelReply">Cancel Reply</div>
        <!--  eslint-disable vue/attribute-hyphenation  -->
        <CommentInput
          :form="form"
          :cid="cid"
          :toId="userinfo._id"
        ></CommentInput>
      </template>
      <slot></slot>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'; // 定义一个空的Vue实例
import { parseTime } from '@/utils/tool';
const Event = new Vue();

export default {
  props: {
    content: {
      type: String,
      default: '',
    },
    form: {
      type: Object,
      default: () => {},
    },
    userinfo: {
      type: Object,
      default: () => {},
    },
    // 评论ID
    cid: {
      type: String,
      default: '',
    },
    // 回复对象的昵称 @xxx
    toNickname: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    const self = this;
    Event.$on('input-closeAll', self.hideSelect); // 监听到某个组件要求关闭的事件,事件名称自定义
  },
  methods: {
    hideSelect() {
      const self = this;
      self.show = false;
      this.$emit('changeShow', false);
    },
    parseTime(time, pattern) {
      return parseTime(time, pattern);
    },
    showComponent() {
      const self = this;
      const showStore = self.show;
      Event.$emit('input-closeAll'); // 通知其他各组件关闭
      if (showStore) {
        // 之前是已经打开的
        self.show = false;
      } else {
        self.show = true;
      }
    },
    // 关闭回复框
    cancelReply() {
      this.show = false;
      this.$emit('changeShow', true);
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-wrap {
  margin: 0 auto;
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
      &:hover .commentinfo .reply {
        opacity: 1 !important;
        cursor: pointer;
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
              .reply {
                font-size: 12px;
                display: block;
                margin-left: 10px;
                float: right;
                text-transform: uppercase;
                color: #fff;
                background-color: #e2684a;
                line-height: 20px;
                padding: 0 6px;
                border-radius: 3px;
                opacity: 0;
              }
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
    .cancel-reply {
      background: #f4f6f8;
      border-radius: 3px;
      padding: 12px 25px;
      margin: 17.5px 0;
      width: 80px;
      font-size: 12px;
      color: #454545;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .comment-wrap {
    padding-left: 40px;
    box-sizing: border-box;
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
