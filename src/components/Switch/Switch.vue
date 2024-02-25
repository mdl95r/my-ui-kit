<template>
  <div class="ui-switch">
    <input 
      id="ui-switch" 
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="ui-switch__checkbox"
      data-testid="switch-input"
      @change="switchHandler"
    >

    <label class="ui-switch__marker" for="ui-switch" data-test-id="switch"></label>

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

  /**
  * Делает switch неактивным
  */
  disabled: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['update:modelValue']);

const switchHandler = ($event) => {
  emit('update:modelValue', $event.target.checked);
}
</script>

<style lang="scss" scoped>
@use './Switch.scss';
</style>