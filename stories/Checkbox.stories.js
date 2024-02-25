import UiCheckbox from "../src/components/Checkbox";
import './assets/main.scss';

export default {
  title: 'Elements/Checkbox',
  component: UiCheckbox,
  tags: ['autodocs'],
};

export const Base = {
  render: (args) => ({
    components: { UiCheckbox },
    setup() {
      return { args };
    },
    data() {
      return {
        checked: false,
      };
    },
    template: `
        <UiCheckbox v-bind="args" v-model="checked" />
    `,
  }),
};

export const WithText = {
  render: (args) => ({
    components: { UiCheckbox },
    setup() {
      return { args };
    },
    data() {
      return {
        checked: false,
      };
    },
    template: `
        <UiCheckbox v-bind="args" v-model="checked">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestias ex natus eligendi nulla tempora id illo a enim, sapiente officia corporis incidunt asperiores modi quibusdam ut et repellat neque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestias ex natus eligendi nulla tempora id illo a enim, sapiente officia corporis incidunt asperiores modi quibusdam ut et repellat neque!</UiCheckbox>
    `,
  }),
};

export const Disabled = {
  args: {
    disabled: true,
  },

  render: (args) => ({
    components: { UiCheckbox },
    setup() {
      return { args };
    },
    data() {
      return {
        checked: false,
      };
    },
    template: `
        <UiCheckbox v-bind="args" v-model="checked" />
    `,
  }),
};