const mixin = {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    jumpTo(name, id) {
      this.$router.push({
        name,
        params: {
          id,
        },
      });
      this.isShow = false;
    },
  },
};

export default mixin;
