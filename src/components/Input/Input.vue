<template>
  <div
    class="ui-input"
    :class="classes"
  >
    <label
      v-if="labelText"
      class="ui-input__label"
      :for="innerId"
      data-testid="label"
    >
      {{ labelText }}
    </label>

    <div class="ui-input__input-main">
      <div class="ui-input__input-container">
        <div
          v-if="iconLeft"
          class="ui-input__icon ui-input__icon_left"
        >
          <Icon
            :name="iconLeft"
            data-testid="iconLeft"
          />
        </div>

        <input
          :id="innerId"
          v-maska
          class="ui-input__input"
          :class="inputClasses"
          :type="innerInputType"
          :placeholder="placeholder"
          :value="modelValue"
          :disabled="disabled"
          :autocomplete="autocomplete"
          :name="name"
          :readonly="readonly"
          :inputmode="inputmode"
          :data-maska="mask"
          data-testid="input"
          @input="onInput"
          @maska="onMaska"
        />

        <div
          v-if="showIconsRight"
          class="ui-input__icons-right"
        >
          <Icon
            v-if="iconRight"
            :name="iconRight"
            class="ui-input__icon-right"
            data-testid="iconRight"
          />

          <Icon
            v-if="loading"
            name="spinner"
            class="ui-input__icon-right ui-input__icon-right_spinner"
            data-testid="loader"
          />

          <template v-if="showPasswordSwitch">
            <div
              class="ui-input__password-switch"
              data-testid="passwordSwitch"
              @click="onTooglePassword"
            >
              <Icon :name="isVisiblePassword ? 'eye-slash' : 'eye'" />
            </div>
          </template>

          <Icon
            v-if="showStateIcons && Boolean(state)"
            :name="stateWithIcons"
            class="ui-input__icon-state"
            data-testid="showStateIcons"
          />

          <div
            v-if="showClearableButton"
            class="ui-input__icon-close"
            data-testid="clearable"
            @click.stop="onClearInput"
          >
            <Icon name="times-circle" />
          </div>

          <div
            v-if="statesText"
            class="ui-input__text"
            :class="{ 'ui-input__state': typeof text === 'object' }"
            data-testid="text"
          >
            {{ statesText }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../Icon';
import randomId from 'random-id';
import { vMaska } from 'maska';

export default {
  name: 'UiInput',

  directives: { maska: vMaska },

  components: {
    Icon,
  },

  props: {
    onClear: {
      type: [Function, Array],
      default: () => [],
    },

    /**
     * Показать кнопку на всю ширину
     */
    wide: {
      type: Boolean,
      default: false,
    },

    /**
     * Использовать в компоненте v-model="имя модели"
     */
    modelValue: {
      type: String,
      default: '',
    },

    /**
     * Делает инпут неактивным
     */
    disabled: Boolean,

    /**
     * Убирает границы
     */
    noBorder: Boolean,

    /**
     * Убирает закругления
     */
    noBorderRadius: Boolean,

    /**
     * Отображает крестик после введения символов, по умолчанию включено
     */
    clearable: {
      type: Boolean,
      default: true,
    },

    /**
     * Показать на мобильных больший размер
     */
    mobile: Boolean,

    /**
     * Показать индикатор загрузки
     */
    loading: Boolean,

    /**
     * Показать иконки состояний
     */
    showStateIcons: {
      type: Boolean,
      default: true,
    },

    /**
     * Иконка слева
     */
    iconLeft: {
      type: [String],
      default: '',
    },

    /**
     * Иконка справа
     */
    iconRight: {
      type: [String],
      default: '',
    },

    /**
     * Текст-подсказка инпута
     */
    placeholder: {
      type: String,
      default: null,
    },

    /**
     * id инпута
     */
    id: {
      type: String,
      default: '',
    },

    /**
     * Имя инпута
     */
    name: {
      type: String,
      default: null,
    },

    /**
     * Только чтение
     */
    readonly: {
      type: Boolean,
      default: false,
    },

    /**
     * Автозаполнение
     */
    autocomplete: {
      type: Boolean,
      default: false,
    },

    /**
     * Label над инпутом
     */
    labelText: {
      type: String,
      default: null,
    },

    /**
     * Добавляет переключатель для показа/скрытия пароля
     */
    passwordSwitch: {
      type: Boolean,
      default: false,
    },

    /**
     * Текст под инпутом
     */
    text: {
      type: [Object, String],
      default: '',
      validator: (v) => {
        const values = ['success', 'warning', 'error'];

        if (typeof v === 'object') {
          if (!values.some((el) => Boolean(v[el]))) {
            console.error(`Если передается обьект, то поля должны быть: ${values.join(', ')}`);
          }
        }

        return true;
      },
    },

    /**
     * Состояние инпута
     */
    state: {
      type: String,
      default: '',
      validator: (v) => {
        const values = ['', 'success', 'warning', 'error'];
        if (!values.includes(v)) {
          console.error(`Значение ${v} не валидно, допустимые значения: ${values.join(', ')}`);
        }

        return true;
      },
    },

    /**
     * Тип инпута
     */
    type: {
      type: String,
      default: 'text',
      validator: (v) => {
        const values = ['text', 'number', 'radio', 'checkbox', 'password'];
        if (!values.includes(v)) {
          console.error(`Значение ${v} не валидно, допустимые значения: ${values.join(', ')}`);
        }

        return true;
      },
    },

    /**
     * Размер инпута
     */
    size: {
      type: String,
      default: 'md',
      validator: (v) => {
        const values = ['sm', 'md', 'lg'];

        if (!values.includes(v)) {
          console.error(`Значение ${v} некорректно, допустимые значения: ${values.join(', ')}`);
        }

        return true;
      },
    },

    /**
     * Позиция лейбла
     */
    labelPosition: {
      type: String,
      default: '',
      validator: (v) => {
        const values = ['', 'horizontal'];

        if (!values.includes(v)) {
          console.error(`Значение ${v} не валидно, допустимые значения: ${values.join(', ')}`);
        }

        return true;
      },
    },

    /**
     * Возможность показать различную клавиатуру на мобильных
     */
    inputmode: {
      type: String,
      default: 'text',
      validator: (v) => {
        const values = ['text', 'none', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'];
        if (!values.includes(v)) {
          console.error(`Значение ${v} не валидно, допустимые значения: ${values.join(', ')}`);
        }

        return true;
      },
    },

    /**
     * Возможность задавать маску инпуту <br> задается через #, пример - +1 ### ###-##-##
     */
    mask: {
      type: String,
      default: null,
    },
  },

  emits: ['update:modelValue', 'unmasked', 'clear'],

  data() {
    return {
      isVisiblePassword: false,
      innerInputType: null,
      innerId: randomId(8),
    };
  },

  computed: {
    classes() {
      const noBorder = { 'ui-input_noborder': this.noBorder };
      const borderRadius = { 'ui-input_borderRadius': this.noBorderRadius };
      const mobile = { 'ui-input_mobile': this.mobile };
      const wide = { 'ui-input_wide': this.wide };
      const disabled = { 'ui-input_disabled': this.disabled };

      return [
        [this.state, this.size, this.labelPosition].filter((el) => Boolean(el)).map((el) => `ui-input_${el}`),
        noBorder,
        mobile,
        wide,
        borderRadius,
        disabled,
      ];
    },

    showIconsRight() {
      return this.iconRight || this.clearable || this.passwordSwitch || (this.showStateIcons && Boolean(this.state));
    },

    showPasswordSwitch() {
      return this.type === 'password' && this.passwordSwitch && this.modelValue;
    },

    inputClasses() {
      return {
        'ui-input__input_left-padding': this.iconLeft,
        'ui-input__input_right-padding': this.showIconsRight,
      };
    },

    statesText() {
      if (typeof this.text === 'string') {
        return this.text;
      }

      return this.text[this.state];
    },

    stateWithIcons() {
      const states = {
        check: this.state === 'success',
        'exclamation-triangle': this.state === 'warning',
        'exclamation-circle': this.state === 'error',
      };

      return Object.keys(states)
        .filter((key) => states[key])
        .join('');
    },

    internalClearable() {
      return Boolean(this.onClear);
    },

    showClearableButton() {
      return this.internalClearable && this.clearable && this.modelValue;
    },
  },

  mounted() {
    this.innerInputType = this.type;
    this.onCheckId();
  },

  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },

    onClearInput() {
      this.$emit('clear');
    },

    onTooglePassword() {
      if (this.modelValue) {
        this.isVisiblePassword = !this.isVisiblePassword;
        this.innerInputType = this.isVisiblePassword ? 'text' : 'password';
      }
    },

    onCheckId() {
      if (this.id) {
        this.innerId = this.id;
      }
    },

    onMaska(e) {
      this.$emit('unmasked', e.detail.unmasked);
    },
  },
};
</script>

<style lang="scss" scoped>
@use './Input';
</style>
