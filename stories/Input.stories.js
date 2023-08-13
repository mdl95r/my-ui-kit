import Input from '../src/components/Input';

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
		methods: {
			onClear() {
				this.text = ''
			}
		},
    template: '<Input v-bind="args" v-model="text" @clear="onClear" />',
  }),

	args: {
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
		methods: {
			onClear() {
				this.text = ''
			}
		},
    template: '<Input v-bind="args" v-model="text" @clear="onClear" />',
  }),

	args: {
		type: 'password',
		passwordSwitch: true,
	}
}

export const InputWithPasswordSwitchWithClear = {
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
		methods: {
			onClear() {
				this.text = ''
			}
		},
    template: '<Input v-bind="args" v-model="text" @clear="onClear"/>',
  }),

	args: {
		type: 'password',
		id: 'input-id'
	}
}

export const InputReadonly = {
	args: {
		readonly: true,
		modelValue: 'readonly text'
	}
}

export const InputWithMask = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
		data() {
			return {
				text: '',
				unmasked: ''
			}
		},
		methods: {
			unmask(v) {
				this.unmasked = v
			},

			onClear() {
				this.text = ''
			}
		},
    template: '<Input v-bind="args" v-model="text" @unmasked="unmask" @clear="onClear" />',
  }),

	args: {
		mask: '+7 (###) ###-##-##'
	}
}