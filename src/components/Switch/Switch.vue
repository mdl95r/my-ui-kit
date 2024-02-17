<template>
  <div class="ui-switch">
    <input 
      type="checkbox" 
      :checked="modelValue"
      :disabled="disabled"
      class="ui-switch__checkbox"
      data-testid="switch-input"
      @change="switchHandler"
    >

    <div class="ui-switch__marker"></div>

    <div v-if="$slots.default" class="ui-switch__text">
      <slot />
    </div>
  </div>
</template>

<script setup>

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },

  disabled: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['onUpdate:modelValue']);

const switchHandler = ($event) => {
  emit('onUpdate:modelValue', $event.target.checked);
}
</script>

<style lang="scss" scoped>
@use './Switch.scss';
</style>