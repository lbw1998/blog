<template>
  <div class="article-wrap">
    <TopImg :url="imgPath" title="Helloworld" type="normal"> </TopImg>
  </div>
</template>

<script>
import TopImg from '@/components/TopImg';

export default {
  components: {
    TopImg,
  },
  data() {
    return {
      imgPath: require('../../assets/img/banner.png'),
    };
  },
};
</script>

<style lang="scss" scoped></style>
