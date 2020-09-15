<template>
  <footer class="footer">
    <div class="site-info">
      <div class="footertext">
        <p class="name">
          <span>Copyright @ Blog</span>
        </p>
        <p>
          © 2020 lbw1998 xxxx
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 2%;
  background: rgba(255, 255, 255, 0.8);
  .site-info {
    text-align: center;
    font-size: 13px;
    color: rgb(185, 185, 185);
    p {
      margin: 15px 0px;
      span {
        color: rgb(0, 0, 0);
      }
    }
  }
}
</style>
