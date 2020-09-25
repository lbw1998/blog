<template>
  <div class="l-comment">
    <MinComment v-if="type === 'min'" :url="url">
      <slot></slot>
    </MinComment>
    <MaxComment v-else :title="title" :direction="direction" :content="content">
      <slot></slot>
      <template slot="content">
        <slot name="content"></slot>
      </template>
    </MaxComment>
  </div>
</template>

<script>
import MaxComment from './MaxComment';
import MinComment from './MinComment';

export default {
  components: {
    MaxComment,
    MinComment,
  },
  props: {
    title: {
      type: String,
      default: '标题',
    },
    content: {
      type: String,
      default: '内容',
    },
    type: {
      type: String,
      default: 'min',
    },
    direction: {
      type: String,
      default: 'row',
    },
    url: {
      type: String,
      default: null,
    },
  },
};
</script>
