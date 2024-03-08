<template>
  <Teleport to="body">
    <div
      ref="modal"
      class="modal"
      :class="[
        { open: open },
        { 'slide-down': animation === 'slide-down' && !customAnimationClass },
        { 'fade-in': animation === 'fade-in' && !customAnimationClass },
        customAnimationClass,
      ]"
      tabindex="0"
      @keydown.esc="closeHandler"
    >
      <div
        class="modal__backdrop"
        @click="closeHandler"
      ></div>

      <div class="modal__body">
        <Button
          icon-left="times"
          variant="clear"
          size="sm"
          shape="square"
          class="modal__close"
          @click="closeHandler"
        />
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue';
import Button from '../Button';

const modal = ref(null);

const props = defineProps({
  /**
   * v-model:open
   */
  open: {
    type: Boolean,
    default: false,
  },

  /**
   * Анимация [slide-down, fade-in]
   */
  animation: {
    type: String,
    default: 'slide-down',
  },

  /**
   * Класс анимации
   */
  customAnimationClass: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(['update:open']);

const closeHandler = () => {
  emit('update:open', false);
};

watch(
  () => props.open,
  (bool) => {
    if (bool) {
      modal.value.focus();
    }
  }
);
</script>

<style scoped lang="scss">
@use './Modal.scss';
</style>
