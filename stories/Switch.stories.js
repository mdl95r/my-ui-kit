import UiSwitch from "../src/components/Switch";
import './assets/main.scss';

export default {
  title: 'Elements/Switch',
  component: UiSwitch,
  tags: ['autodocs'],
};

export const Base = {
  render: (args) => ({
    components: { UiSwitch },
    setup() {
      return { args };
    },
    data() {
      return {
        checked: false,
      };
    },
    template: `
        <UiSwitch v-bind="args" v-model="checked" />
    `,
  }),
};

export const WithText = {
  render: (args) => ({
    components: { UiSwitch },
    setup() {
      return { args };
    },
    data() {
      return {
        checked: false,
      };
    },
    template: `
        <UiSwitch v-bind="args" v-model="checked">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestias ex natus eligendi nulla tempora id illo a enim, sapiente officia corporis incidunt asperiores modi quibusdam ut et repellat neque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestias ex natus eligendi nulla tempora id illo a enim, sapiente officia corporis incidunt asperiores modi quibusdam ut et repellat neque!</UiSwitch>
    `,
  }),
};

export const Disabled = {
  args: {
    disabled: true,
  },

  render: (args) => ({
    components: { UiSwitch },
    setup() {
      return { args };
    },
    data() {
      return {
        checked: false,
      };
    },
    template: `
        <UiSwitch v-bind="args" v-model="checked" />
    `,
  }),
};