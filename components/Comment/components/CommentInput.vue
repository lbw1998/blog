<template>
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
</template>

<script>
import { COMMENT_API, MESSAGE_API } from '@/utils/api';

export default {
  inject: ['getComment'],
  props: {
    form: {
      type: Object,
      default: () => {
        return {
          radio: false,
          content: '',
          nickname: '',
          qq: '',
          avatar: '',
          email: '',
        };
      },
    },
    cid: {
      type: String,
      default: '',
    },
    toId: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'comment',
    },
  },

  methods: {
    async submit() {
      if (!this.form.radio) {
        alert('请先打卡~');
        return false;
      }
      if (!this.form.content) {
        alert('请填写内容~');
        return false;
      }
      let params = {
        nickname: this.form.nickname,
        content: this.form.content,
        qq: this.form.qq,
        avatar: this.form.avatar,
        email: this.form.email,
        article_id: this.$route.params.id,
      };
      if (this.cid && this.toId) {
        params = Object.assign(params, { cid: this.cid, to_vid: this.toId });
      }
      let res;
      if (this.type === 'comment') {
        res = await COMMENT_API.create(params);
      } else if (this.type === 'message') {
        res = await MESSAGE_API.create(params);
      }
      if (res.code === 0) {
        this.$message.success(res.message);
        this.getComment();
      }
    },
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
  },
};
</script>

<style lang="scss" scoped>
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
      margin-bottom: 20px;
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
</style>
