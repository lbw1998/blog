<template>
  <!-- 代码暂时懒得抽离 -->
  <div class="comments-main">
    <h3 class="comments-list-title">
      Comments | <span class="noticom">25 条评论 </span>
    </h3>
    <!-- 评论 -->
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
            <p>测试</p>
          </div>
        </div>
        <hr />
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
                  测试
                </p>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <!-- 输入框 -->
    <div class="respond">
      <div class="comment-textarea">
        <textarea
          v-model="form.content"
          class="commentbody"
          placeholder="请输入..."
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div class="user-info">
        <div class="user-avatar">
          <img
            :src="form.avatar || 'http://127.0.0.1:7001/public/img/avatar.png'"
          />
        </div>
        <div class="input">
          <input
            v-model="form.nickname"
            type="text"
            disabled
            placeholder="昵称 (根据qq号自动获取)"
          />
        </div>
        <div class="input">
          <input
            v-model="form.qq"
            type="text"
            placeholder="QQ号 (必须*)"
            @blur="getInfo(form.qq)"
          />
        </div>
        <div class="input">
          <input v-model="form.email" type="text" placeholder="邮箱 (必须*)" />
        </div>
      </div>
      <label class="siren-checkbox-label">
        <input
          v-model="form.radio"
          class="siren-checkbox-radio"
          type="checkbox"
        />
        <span class="siren-no-robot-checkbox siren-checkbox-radioInput"></span>
        滴，学生卡 | I'm not a robot
      </label>
      <div class="submit">
        <input type="submit" value="BiuBiuBiu~" @click="submit" />
      </div>
    </div>
  </div>
</template>

<script>
import { COMMENT_API } from '@/utils/api';

export default {
  props: {
    imgUrl: {
      type: String,
      default: '',
    },
    articleId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      form: {
        radio: false,
        content: '',
        nickname: '',
        qq: '',
        avatar: '',
        email: '',
      },
    };
  },
  methods: {
    async getInfo(qq) {
      if (this.form.qq !== '') {
        const res = await COMMENT_API.getInfo({ qq });
        if (res.code === 0) {
          this.form.nickname = res.data.nickname;
          this.form.avatar = res.data.avatar;
          this.form.email = qq + '@qq.com';
        } else {
          this.form = {
            nickname: '',
            qq: this.form.qq,
            avatar: '',
            email: '',
          };
        }
      }
    },
    async submit() {
      if (!this.form.radio) {
        alert('请先打卡~');
        return false;
      }
      if (!this.form.content) {
        alert('请填写内容~');
        return false;
      }
      const params = {
        nickname: this.form.nickname,
        content: this.form.content,
        qq: this.form.qq,
        avatar: this.form.avatar,
        email: this.form.email,
        article_id: this.articleId,
      };
      await COMMENT_API.create(params);
    },
  },
};
</script>

<style lang="scss" scoped>
.comments-main {
  width: 100%;
  overflow: hidden;
  .comments-list-title {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 40px;
    color: #7d7d7d;
    font-weight: 400;
  }
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
  .respond {
    width: 100%;
    .comment-textarea {
      position: relative;
      .commentbody {
        background-image: url(https://view.moezx.cc/images/2018/03/24/comment-bg.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        resize: vertical;
        display: block;
        float: none;
        width: 100%;
        height: 180px;
        color: #535a63;
        border: 1px solid #ddd;
        background-color: transparent;
        box-sizing: border-box;
        font-size: 14px;
        margin: 0;
        padding: 21px 21px 20px;
        border-radius: 3px;
      }
    }
    .user-info {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 30px;
      justify-content: space-between;
      .user-avatar {
        width: 64px;
        height: 64px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .input {
        width: 249px;
        box-sizing: border-box;
        input {
          border: 1px solid #ddd;
          width: 100%;
          background-color: rgba(255, 255, 255, 0);
          font-size: 14px;
          box-sizing: border-box;
          padding: 21px 21px 20px;
          color: #535a63;
          background: #fff;
          border-radius: 3px;
        }
      }
    }
    .siren-checkbox-label {
      margin: 20px 20px 0 0;
      display: inline-block;
      cursor: pointer;
      color: #555;
      font-size: 14px;
      input {
        padding: 0;
        margin: 0;
        float: none;
        width: initial;
        border: 1px solid #ddd;
        background-color: rgba(255, 255, 255, 0);
        display: none;
        &:checked + .siren-checkbox-radioInput:after {
          background-color: #fe9600;
          border-radius: 100%;
          content: '';
          display: block;
          height: 12px;
          margin: 3px;
          width: 12px;
        }
      }
      .siren-checkbox-radioInput {
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 100%;
        display: inline-block;
        height: 18px;
        margin-right: 8px;
        margin-top: -7px;
        vertical-align: sub;
        width: 18px;
        line-height: 1;
      }
    }
    .submit {
      width: 100%;
      margin-top: 20px;
      input[type='submit'] {
        cursor: pointer;
        width: 100%;
        margin: 0;
        padding: 15px 25px;
        text-transform: none;
        color: #535a63;
        background: 0 0;
        border-right: 0;
        transition: all 0.1s ease-out;
        box-shadow: none;
        border: 1px solid #ccc;
        text-shadow: none;
        border-radius: 3px;
        &:hover {
          border: 1px solid #fe9600;
          background: 0 0 !important;
          color: #fe9600;
        }
      }
    }
  }
}
</style>
