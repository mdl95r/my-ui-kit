<template>
  <Teleport to="body">
    <div 
      ref="modal"
      class="modal"
      :class="{ 'open': open }"
      tabindex="0"
      @keydown.esc="closeHandler"
    >
      <div
        class="modal__backdrop"
        @click="closeHandler">
      </div>

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
})

const emit = defineEmits(['update:open'])

const closeHandler = () => {
  emit('update:open', false);
}

watch(() => props.open, (bool) => {
  if (bool) {
    modal.value.focus();
  }
})
</script>

<style scoped lang="scss">
@use './Modal.scss';
</style>