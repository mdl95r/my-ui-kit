import Input from '../src/components/Input/Input.vue';

export default {
  title: 'Elements/Input',
  component: Input,
  tags: ['autodocs'],

	args: {
		placeholder: 'Placeholder',
		wide: false,
		disabled: false,
		modelValue: '',
	},
};

export const Base = {};

export const SuccessStateWithStatusesText = {
	args: {
		clearable: true,
		state: 'success',
		text: {
			success: 'Текст успех с подсветкой!',
			warning: 'Текст предупреждение с подсветкой!!',
			error: 'Текст ошибка с подсветкой!!!',
		}
	}
};

export const WarningStateWithRegularText = {
	args: {
		state: 'warning',
		text: 'Просто текст, не состояния'
	}
};

export const FullText = {
	args: {
		text: 'Bottom text',
		labelText: 'Top text'
	}
};

export const LabelHorizontalWithText = {
	args: {
		labelText: 'Top text',
		labelPosition: 'horizontal',
		text: 'Bottom text',
	}
}

export const InputSmallSize = {
	args: {
		size: 'sm',
	}
}


export const InputWithLeftAndRightIcon = {
	args: {
		iconLeft: 'heart-fill',
		iconRight: 'heart-fill',
	}
}

export const InputWithPasswordSwitch = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
		data() {
			return {
				text: '',
			}
		},
    template: '<Input v-bind="args" v-model="text" />',
  }),

	args: {
		type: 'password',
		passwordSwitch: true,
		clearable: true,
	}
}

export const InputWithPasswordWithoutSwitchWithClear = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
		data() {
			return {
				text: '',
			}
		},
    template: '<Input v-bind="args" v-model="text" />',
  }),

	args: {
		type: 'password',
		clearable: true,
		id: 'input-id'
	}
}

export const InputReadonly = {
	args: {
		readonly: true,
		modelValue: 'readonly text'
	}
}
