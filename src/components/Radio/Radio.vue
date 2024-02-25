<template>
  <label class="ui-radio" data-test-id="radio">
    <input 
      type="radio"
      :checked="isChecked"
      :disabled="disabled"
      :name="name"
      :value="value"
      class="ui-radio__radio"
      @change="switchHandler"
    >

    <span class="ui-radio__marker"></span>

    <div v-if="$slots.default" class="ui-radio__text">
      <slot />
    </div>
  </label>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },

  /**
  * Делает radio неактивным
  */
  disabled: {
    type: Boolean,
    default: false,
  },

  /**
  * Добавить атрибут name
  */
  name: {
    type: String,
    default: null,
  },

  /**
  * Значение value
  */
  value: {
    type: [String, Number],
    default: null,
  }
})

const isChecked = computed(() => {
  return props.modelValue === props.value;
});

const emit = defineEmits(['update:modelValue']);

const switchHandler = ($event) => {
  emit('update:modelValue', $event.target.value);
}
</script>

<style lang="scss" scoped>
@use './Radio.scss';
</style>