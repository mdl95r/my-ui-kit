import DropDown from '../src/components/DropDown';

export default {
  title: 'Elements/DropDown',
  component: DropDown,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' },
  },
	args: {},
};

export const Base = {
	render: (args) => ({
    components: { DropDown },
    setup() {
      return { args };
    },
    template: `<div style="position: relative;">
								<DropDown v-bind="args">DropDownContent</DropDown>
							</div>`,
  }),
};