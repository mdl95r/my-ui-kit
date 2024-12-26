<template>
  <div
    class="ui-badge"
    :class="`ui-badge_${size}`"
  >
    <div class="ui-badge__text">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  /**
   * Размер [sm, md]
   */
  size: {
    type: String,
    default: 'md',
  },

  text: {
    type: String,
    required: true
  }
});
</script>

<style scoped lang="scss">
@use './Badge.scss';
</style>
