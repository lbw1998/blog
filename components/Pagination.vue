<template>
  <div v-if="pageCount !== 1" class="patination-wrap">
    <button v-show="currentPage != 1" class="prev" @click="currentChange(1)">
      « Older
    </button>
    <ul class="pager">
      <li
        v-for="i in pageCount"
        :key="i"
        :class="{ active: currentPage === i }"
        @click="currentChange(i, currentPage === i)"
      >
        {{ i }}
      </li>
    </ul>
    <button
      v-show="currentPage != pageCount"
      class="next"
      @click="currentChange(pageCount)"
    >
      Newer »
    </button>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pageSize) || 1;
    },
  },
  methods: {
    currentChange(pageNum, flag) {
      // 是否点击的自己
      if (!flag) {
        this.currentPage = pageNum;
        this.$emit('currentChange', pageNum);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.patination-wrap {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
  .pager {
    user-select: none;
    list-style: none;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    padding: 0;
    margin: 0;
    li {
      vertical-align: super;
      box-sizing: border-box;
      text-align: center;
      margin: 0;
      font-size: 15px;
      background: transparent;
      cursor: pointer;
      display: inline-block;
      color: #ababab;
      padding: 0 5px;
      &.active {
        cursor: default;
        color: #fe9600;
      }
    }
  }
  .prev,
  .next {
    border: none;
    display: inline-block;
    vertical-align: super;
    color: #fe9600;
    padding: 0 5px;
    font-weight: bold;
    font-size: 15px;
    background-color: transparent;
    cursor: pointer;
  }
}
</style>
