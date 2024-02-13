<template>
  <Icon class="spinner" :name="spinnerIcon" :size="size" :size-em="false" :style="{ animationDuration: `${animationDuration}s` }" />
</template>

<script>
import Icon from '../Icon';

  export default {
    name: 'UiSpinner',
    components: {
      Icon,
    },

    props: {
      /**
      * Размер иконки [sm, md, lg]
      */
      size: {
        type: String,
        default: 'lg'
      },

      /**
      * Скорость вращения спиннера, если указано (по умолчанию 2s)
      */
      animationDuration: {
        type: Number,
        default: null
      },

      /**
      * Иконка вращения
      */
      spinnerIcon: {
        type: String,
        default: 'spinner',
      }
    }
  }
</script>

<style lang="scss" scoped>
@keyframes rotate-animation {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: rotate-animation 2s infinite linear
}
</style>