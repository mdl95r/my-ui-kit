<template>
  <div
    v-on-click-outside="onCloseSelect"
    class="ui-select"
    :class="classes"
    @click="onToggleSelect"
  >
    <div class="ui-select__header">
      <ui-input 
        v-model="selectionName"
        type="text"
        class="ui-select__selected" 
        :readonly="!searchable || multiselect"
        :placeholder="placeholder"
        :state="state"
        :disabled="disabled"
        :label-text="label"
        :icon-left="leftIcon"
        :icon-right="rightIcon"
        @clear="onClearSelect"
      />
    </div>

    <ui-dropdown
      v-show="isOpen"
      data-testid="dropdown"
    >
      <ul
        class="ui-select__list"
      >
        <select-item
          v-for="option in searchOptions"
          :key="option.id"
          :selection="selection"
          :multiselect="multiselect"
          :option="option"
          @on-option-select="onOptionSelect"
        >
          <slot
            name="options"
            v-bind="option"
          >
            {{ option.name }}
          </slot>
        </select-item>
      </ul>
    </ui-dropdown>
  </div>
</template>

<script>
import UiInput from '../Input';
import UiDropdown from '../DropDown';
import SelectItem from './SelectItem.vue';
import { vOnClickOutside } from '@vueuse/components';

	export default {
		name: 'UiSelect',

		components: {
			UiInput,
			UiDropdown,
      SelectItem,
		},

    directives: {
      'on-click-outside': vOnClickOutside
    },

		props: {
			iconRight: {
				type: String,
				default: null,
			},

			iconLeft: {
				type: String,
				default: null,
			},

			/**
		 	* Placeholder
		 	*/
			placeholder: {
        type: String,
        default: 'Placeholder',
      },

      /**
       * Связь с v-model
       */
			modelValue: {
				type: [String, Number, Array, Object],
				default: ''
			},

			/**
		 	* Селект выключен
		 	*/
			disabled: {
				type: Boolean,
				default: false
			},

			/**
		 	* searchable
		 	*/
			 searchable: {
				type: Boolean,
				default: false,
			},

			/**
		 	* multiselect
		 	*/
			multiselect: {
				type: Boolean,
				default: false,
			},

			/**
		 	* options
		 	*/
			options: {
				type: Array,
				required: true,
			},

			/**
			* state
			*/
			state: {
				type: String,
				default: '',
				validator: (v) => {
					const values = ['', 'succces', 'warning', 'danger']
					if (!values.includes(v)) {
						console.error(`Значение ${v} некорректно, допустимые значения: ${values.join(', ')}`);
					}

					return true
				}
			},

			/**
			* Label над селектом
			*/
			label: {
				type: String,
				default: null,
			},

			/**
			* Показывать иконку в инпуте при выборе в селекте
			*/
      showSelectedIcon: {
        type: Boolean,
				default: true,
      },

      /**
			* Больше этого числа в мультиселекте выбранные значения обрежутся
			*/
      multiselectCount: {
        type: Number,
				default: 4,
      },

      /**
			* chosen: string
			*/
      texts: {
        type: Object,
        default: () => ({
          chosen: 'Выбрано'
        })
      }
		},

		emits: ['update:model-value'],

		data() {
			return {
				isOpen: false,
				selection: this.multiselect ? [] : this.modelValue || null,
        selectionName: !this.multiselect && this.modelValue?.name ? this.modelValue.name : '',
        innerSearchable: this.multiselect && this.searchable && false,
			}
		},

		computed: {
			searchOptions() {
				if (this.searchable && !this.multiselect) {
					return (this.options.filter((el) => el.name.toLowerCase().includes(this.selectionName.toLowerCase())));
				}

				return this.options
			},

			rightIcon() {
				return this.iconRight || (this.isOpen ? 'angle-up' : 'angle-down');
			},

      leftIcon() {
        if (this.selection?.icon && this.showSelectedIcon) {
          return this.selection.icon
        }

        return this.iconLeft;
      },

			classes() {
				return {
					'ui-select_disabled': this.disabled
				}
			},
		},
  
		methods: {
			onOptionSelect(item) {
				if (!this.multiselect) {
					this.selection = item;
          this.selectionName = item.name
	
					this.onCloseSelect();
	
					this.$emit('update:model-value', item);
				} else {
          const findedEl = this.selection.find(el => el.id === item.id);
          
          if (!findedEl) {
            this.selection.push(item);
          } else {
            this.selection = this.selection.filter(el => el.id !== findedEl.id);
          }

          const options = this.selection.map(el => el.name);

          this.selectionName = this.selection.length > this.multiselectCount ? `${this.texts.chosen}: ${this.selection.length}` : options.join(', ');

					this.$emit('update:model-value', this.selection.length > this.multiselectCount ?  options : this.selectionName.split(', '));
				}
			},

			onClickOutSide() {
				this.onOpenSelect();
			},

			onCloseSelect() {
				this.isOpen = false;
			},

			onOpenSelect() {
				this.isOpen = true;
			},

			onToggleSelect() {
				if (!this.isOpen) {
					this.onOpenSelect();
				} else {
					this.onCloseSelect();
				}
			},

			onClearSelect() {
        if (!this.multiselect) {
          this.selection = null;
        } else {
          this.selection = [];
        }

				this.selectionName = '';
				this.$emit('update:model-value', null);

				this.onCloseSelect();
			},
		}
	}
</script>

<style lang="scss" scoped>
@use './Select.scss';
</style>