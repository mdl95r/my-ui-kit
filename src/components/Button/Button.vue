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

<script>
import Icon from '../Icon';
import Spinner from '../Spinner';

  export default {
    name: 'UiButton',
    components: {
      Icon,
      Spinner,
    },

    props: {
      /**
       * Иконка слева
       */
      iconLeft: {
        type: String,
        default: null
      },

      /**
       * Иконка справа
       */
      iconRight: {
        type: String,
        default: null
      },

      /**
       * Спиннер загрузки
       */
      loading: {
        type: Boolean,
        default: false
      },

      /**
       * Кнопка на всю ширину, выравнивает по центру
       */
      wide: {
        type: Boolean,
        default: false
      },

      /**
       * Сделать кнопку неактивной
       */
      disabled: {
        type: Boolean,
        default: false
      },

      /**
       * Показать границу у кнопки 
       */
      border: {
        type: Boolean,
        default: false
      },

      /**
       * Размер [sm, md, lg]
       */
      size: {
        type: String,
        default: 'md'
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
        default: 'button'
      },
      
      /**
       * Цвет кнопки [primary, secondary, tertiary, clear]
       */
      variant: {
        type: String,
        default: 'primary'
      },

      /**
       * Форма кнопки [square, circle]
       */
      shape: {
        type: String,
        default: ''
      },

      /**
       * Вид кнопки ['', 'danger', 'success']
       */
      view: {
        type: String,
        default: '',
      }
    },

    computed: {
      buttonOptions() {
        const tags = {
          href: this.href,
          to: this.to
        }
        
        const filteredTags = Object.keys(tags).filter((el) => tags[el])
        
        const defaultOptions = {
          tag: 'button',
          attributes: {
            type: this.typeButton,
          }
        }

        const options = {
          href: {
            tag: 'a',
            attributes: {
              href: this.href,
            }
          },

          to: {
            tag: 'router-link',
            attributes: {
              to: this.to,
            }
          }
        }

        return options[filteredTags.join('')] || defaultOptions
      },

      states() {
        const classes = {
          'button_disabled': this.disabled,
          [`button_${this.size}`]: this.size,
          [`button_${this.variant}`]: this.variant,
          [`button_${this.shape}`]: this.shape,
          [`button_${this.view}`]: this.view,
          'button_bordered': this.border,
          'button_wide': this.wide,
          'button_loading': this.loading,
        }

        const filteredClasses = Object.keys(classes).filter((el) => classes[el])

        return {
          classes: filteredClasses,
          attributes: {
            disabled: this.disabled
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
@use './Button.scss';
</style>