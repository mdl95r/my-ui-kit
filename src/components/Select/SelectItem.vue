<template>
  <li
    class="ui-select__list-item"
    :class="selectedOptions(option)"
    :data-testid="`option-${option.id}`"
    @click.stop="onOptionSelect(option)"
  >
    <slot />
  </li>
</template>

<script>
  export default {
    props: {
      option: {
        type: Object,
        required: true,
      },

      selection: {
        type: [Array, Object, null],
        required: true,
      },

      multiselect: {
        type: Boolean,
        required: true,
      }
    },

    emits: ['onOptionSelect'],

    methods: {
      selectedOptions(option) {
        if (!this.multiselect) {
          return { 'ui-select__list-item_selected': this.selection?.id === option.id }
        }

        return { 'ui-select__list-item_selected': this.selection.find(el => el.id === option.id) }
      },

      onOptionSelect(option) {
        this.$emit('onOptionSelect', option);
      }
    }
  }
</script>