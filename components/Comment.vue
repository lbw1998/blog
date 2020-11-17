<template>
  <div class="l-comment">
    <MinComment v-if="type === 'min'" :url="url">
      <slot></slot>
    </MinComment>
    <MaxComment
      v-else
      :title="title"
      :category="category"
      :comments="comments"
      :time="time"
      :views="views"
      :direction="direction"
      :content="content"
    >
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
    category: {
      type: String,
      default: '类别',
    },
    views: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    time: {
      type: String,
      default: '2020-07-17',
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
