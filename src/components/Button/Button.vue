<template>
  <component
    :is="buttonOptions.tag"
    v-bind="{ ...buttonOptions.attributes, ...states.attributes }"
    :class="states.classes"
    class="button"
  >
    <span v-if="iconLeft" class="button__icon-left">
      <Icon :name="iconLeft" :size="size" />
    </span>

    <span v-if="$slots.default" class="button__text">
      <slot />
    </span>
    <span v-if="iconRight || loading" class="button__icon-right">
      <Icon v-if="iconRight" :name="iconRight" :size="size" />
      <Spinner v-if="loading" :size="size" />
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue';
import Icon from '../Icon';
import Spinner from '../Spinner';

const props = defineProps({
  /**
   * Иконка слева
   */
  iconLeft: {
    type: String,
    default: null,
  },

  /**
   * Иконка справа
   */
  iconRight: {
    type: String,
    default: null,
  },

  /**
   * Спиннер загрузки
   */
  loading: {
    type: Boolean,
    default: false,
  },

  /**
   * Кнопка на всю ширину, выравнивает по центру
   */
  wide: {
    type: Boolean,
    default: false,
  },

  /**
   * Сделать кнопку неактивной
   */
  disabled: {
    type: Boolean,
    default: false,
  },

  /**
   * Показать границу у кнопки
   */
  border: {
    type: Boolean,
    default: false,
  },

  /**
   * Размер [sm, md, lg]
   */
  size: {
    type: String,
    default: 'md',
  },

  /**
   * Меняет тег на "a" и прописывает аттрибут "href"
   */
  href: {
    type: String,
    default: null,
  },

  /**
   * Меняет тег на "router-link" и прописывает аттрибут "to"
   */
  to: {
    type: String,
    default: null,
  },

  /**
   * Тип кнопки [button, submit]
   */
  typeButton: {
    type: String,
    default: 'button',
  },

  /**
   * Цвет кнопки [primary, secondary, tertiary, clear]
   */
  variant: {
    type: String,
    default: 'primary',
  },

  /**
   * Форма кнопки [square, circle]
   */
  shape: {
    type: String,
    default: '',
  },

  /**
   * Вид кнопки ['', 'danger', 'success']
   */
  view: {
    type: String,
    default: '',
  },
});

const buttonOptions = computed(() => {
  {
    const tags = {
      href: props.href,
      to: props.to,
    };

    const filteredTags = Object.keys(tags).filter((el) => tags[el]);

    const defaultOptions = {
      tag: 'button',
      attributes: {
        type: props.typeButton,
      },
    };

    const options = {
      href: {
        tag: 'a',
        attributes: {
          href: props.href,
        },
      },

      to: {
        tag: 'router-link',
        attributes: {
          to: props.to,
        },
      },
    };

    return options[filteredTags.join('')] || defaultOptions;
  }
});

const states = computed(() => {
  const classes = {
    button_disabled: props.disabled,
    [`button_${props.size}`]: props.size,
    [`button_${props.variant}`]: props.variant,
    [`button_${props.shape}`]: props.shape,
    [`button_${props.view}`]: props.view,
    button_bordered: props.border,
    button_wide: props.wide,
    button_loading: props.loading,
  };

  const filteredClasses = Object.keys(classes).filter((el) => classes[el]);

  return {
    classes: filteredClasses,
    attributes: {
      disabled: props.disabled,
    },
  };
});
</script>

<style lang="scss" scoped>
@use './Button.scss';
</style>
