import UiSwitch from "../src/components/Switch";

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
        <UiSwitch v-bind="args" v-model="checked">Text</UiSwitch>
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