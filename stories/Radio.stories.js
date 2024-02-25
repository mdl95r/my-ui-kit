import UiRadio from "../src/components/Radio";
import './assets/main.scss';

export default {
  title: 'Elements/Radio',
  component: UiRadio,
  tags: ['autodocs'],
};

export const Base = {
  render: (args) => ({
    components: { UiRadio },
    setup() {
      return { args };
    },
    data() {
      return {
        checked: false,
      };
    },
    template: `
        <UiRadio v-bind="args" v-model="checked" />
    `,
  }),
};

export const WithText = {
  render: (args) => ({
    components: { UiRadio },
    setup() {
      return { args };
    },
    data() {
      return {
        checked: false,
      };
    },
    template: `
        <UiRadio v-bind="args" v-model="checked">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestias ex natus eligendi nulla tempora id illo a enim, sapiente officia corporis incidunt asperiores modi quibusdam ut et repellat neque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestias ex natus eligendi nulla tempora id illo a enim, sapiente officia corporis incidunt asperiores modi quibusdam ut et repellat neque!</UiRadio>
    `,
  }),
};

export const Disabled = {
  args: {
    disabled: true,
  },

  render: (args) => ({
    components: { UiRadio },
    setup() {
      return { args };
    },
    data() {
      return {
        checked: false,
      };
    },
    template: `
        <UiRadio v-bind="args" v-model="checked" />
    `,
  }),
};

export const TwoRadio = {
  render: (args) => ({
    components: { UiRadio },
    setup() {
      return { args };
    },
    data() {
      return {
        gender: null,
      };
    },
    template: `
        <UiRadio v-bind="args" name="gender" v-model="gender" value="male" style="display: flex; margin-bottom: 10px;">male</UiRadio>
        <UiRadio v-bind="args" name="gender" v-model="gender" value="female" style="display: flex;">female</UiRadio>
    `,
  }),
};
