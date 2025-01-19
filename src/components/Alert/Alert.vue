<template>
  <div class="ui-alert" :class="classes">
    <div v-if="!hideIcon" class="ui-alert__icon">
      <Icon
        :name="iconName"
      />
    </div>

    <div class="ui-alert__content">
      <div class="ui-alert__header">
        <div v-if="$slots.title" class="ui-alert__title">
          <slot name="title" />
        </div>

        <div v-if="closable" class="ui-alert__close">
          <Button
            icon-left="times"
            shape="square"
            size="md"
            variant="clear"
            data-test-id="closableButton"
            @click="$emit('close')"
          />
        </div>
      </div>
  
      <div v-if="$slots.body" class="ui-alert__body">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '../Icon';
import Button from '../Button';
import { computed, useSlots } from 'vue';

const props = defineProps({
  /**
   * Состояния [info, success, warning, danger, draft, update]
   */
  state: {
    type: String,
    default: 'info'
  },

  /**
   * Можно ли закрыть алерт
   */
  closable: {
    type: Boolean,
    default: false
  },

  /**
   * Показать на всю ширину
   */
  wide: {
    type: Boolean,
    default: false
  },

  /**
   * Скрыть иконку
   */
  hideIcon: {
    type: Boolean,
    default: false
  },

  /**
   * Размер [sm, md, lg]
   */
  size: {
    type: String,
    default: 'lg'
  }
})

const slots = useSlots();

defineEmits(['close']);

const iconName = computed(() => {
  const names = {
    'exclamation-circle': props.state === 'info' || props.state === 'warning' || props.state === 'danger',
    'check-circle': props.state === 'success',
    'pencil': props.state === 'draft',
    'sync': props.state === 'update'
  }

  return Object.keys(names).filter((el) => names[el]).join('')
})

const classes = computed(() => {
  return [
    `ui-alert_${props.state}`,
    `ui-alert_${props.size}`,
    { 'ui-alert_center': !slots.body },
    { 'ui-alert_wide': props.wide }
  ]
})
</script>

<style lang="scss" scoped>
@use './Alert.scss';
</style>