<template>
  <div class="wrap">
    <div class="login">
      <div class="tip">
        <b>一个后台</b>
      </div>
      <div class="username">
        <el-input
          v-model="form.username"
          placeholder="用户名"
          size="mini"
          prefix-icon="el-icon-user"
        />
      </div>
      <div class="password">
        <el-input
          v-model="form.password"
          placeholder="密码"
          size="mini"
          show-password
          prefix-icon="el-icon-lock"
          @keyup.enter.native="login"
        />
      </div>
      <div class="sign-in">
        <el-checkbox v-model="form.rememberMe" style="margin: 0px 0px 25px 0px;"
          >记住密码</el-checkbox
        >
        <el-button size="mini" type="primary" @click="login()">登 录</el-button>
      </div>
    </div>
    <div class="copyright">
      <div class="top">
        Copyright © 2020 All Right Reserved
      </div>
      <div class="bottom">
        @取暖
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'md5';
import Cookie from 'js-cookie';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: '',
        rememberMe: false,
      },
      loading: false,
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler(route) {
        this.redirect = route.query && route.query.redirect;
      },
    },
  },
  created() {
    this.getCookie();
  },
  methods: {
    getCookie() {
      const username = Cookie.get('username');
      const password = Cookie.get('password');
      const rememberMe = Cookie.get('rememberMe');
      this.form = {
        username: username === undefined ? this.form.username : username,
        password: password === undefined ? md5(this.form.password) : password,
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe),
      };
      if (username && password) {
        this.login();
      }
    },
    login() {
      this.loading = true;
      const params = {
        username: this.form.username,
        password: md5(this.form.password),
      };
      if (this.form.rememberMe) {
        Cookie.set('username', this.form.username, { expires: 30 });
        Cookie.set('password', this.form.password, { expires: 30 });
        Cookie.set('rememberMe', this.form.rememberMe, { expires: 30 });
      } else {
        Cookie.remove('username');
        Cookie.remove('password');
        Cookie.remove('rememberMe');
      }
      this.$store
        .dispatch('user/login', params)
        .then((res) => {
          if (res.code === 0) {
            this.$notify({
              title: res.data.nickname,
              message: '欢迎您',
              type: 'success',
            });
          }
          this.$router.push(this.redirect || '/admin');
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: url('../assets/img/child.jpg');
  background-size: cover;
  overflow: hidden;
  position: relative;
  .login {
    width: 300px;
    position: absolute;
    top: 20%;
    right: 10%;
    background: #ffffff;
    border: 1px solid #e9e9e9;
    border-radius: 4px;
    .title {
      padding-top: 35px;
      text-align: center;
      .logo {
        display: inline-block;
        width: 70px;
        height: 70px;
        // background: url("../assets/img/child.jpg");
      }
    }
    .tip {
      padding-top: 21px;
      font-size: 22px;
      color: #262626;
      text-align: center;
      span {
        font-size: 18px;
        color: #595959;
        letter-spacing: 0.34px;
        font-weight: bold;
      }
    }
    .username {
      width: 220px;
      margin: 0 auto;
      margin-top: 36px;
      .email {
        width: 16px;
        height: 13px;
        margin-top: 13px;
        margin-left: 5px;
        display: inline-block;
      }
    }
    .password {
      width: 220px;
      margin: 0 auto;
      margin-top: 20px;
      .lock {
        width: 16px;
        height: 16px;
        margin-top: 12px;
        margin-left: 5px;
        display: inline-block;
      }
    }
    .sign-in {
      width: 220px;
      margin: 40px auto;
      .el-button {
        width: 220px;
      }
    }
  }
  .copyright {
    width: 469px;
    height: 68px;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 5px;
    margin: auto;
    .top {
      line-height: 34px;
      color: #595959;
      text-align: center;
      border-bottom: 1px solid #e8e8e8;
    }
    .bottom {
      color: #8c8c8c;
      text-align: center;
      line-height: 34px;
    }
  }
}
</style>
