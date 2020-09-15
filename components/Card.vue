<template>
  <div class="l-card">
    <MinCard v-if="type === 'min'" :title="title" :content="content">
      <slot></slot>
    </MinCard>
    <MaxCard
      v-else-if="type === 'max'"
      :title="title"
      :direction="direction"
      :content="content"
    >
      <slot></slot>
      <template slot="content">
        <slot name="content"></slot>
      </template>
    </MaxCard>
  </div>
</template>

<script>
import MinCard from './MinCard';
import MaxCard from './MaxCard';

export default {
  components: {
    MinCard,
    MaxCard,
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
  },
};
</script>

<style lang="scss" scoped>
.l-card {
}
</style>
