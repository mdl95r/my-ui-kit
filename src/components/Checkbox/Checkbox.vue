<template>
  <label class="ui-checkbox" data-test-id="checkbox">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="ui-checkbox__checkbox"
      @change="switchHandler"
    >

    <span class="ui-checkbox__marker"></span>

    <div v-if="$slots.default" class="ui-checkbox__text">
      <slot />
    </div>
  </label>
</template>

<script setup>

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },

  /**
  * Делает checkbox неактивным
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
@use './Checkbox.scss';
</style>