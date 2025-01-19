import UiAlert from '../src/components/Alert';
import './assets/main.scss';

export default {
  title: 'Elements/Alert',
  component: UiAlert,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger', 'draft'],
    },
  },
};

export const Info = {
  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: 
      `
        <UiAlert v-bind="args">
          <template #title>
            <p><strong>Information alert:</strong> lorem ipsum dolor sit amet</p>
          </template>
        </UiAlert>
      `,
  }),
};

export const Success = {
  args: {
    state: 'success'
  },

  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: 
      `
        <UiAlert v-bind="args">
          <template #title>
            <p><strong>Success alert:</strong> lorem ipsum dolor sit amet</p>
          </template>
        </UiAlert>
      `,
  }),
};

export const Warning = {
  args: {
    state: 'warning'
  },

  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: 
      `
        <UiAlert v-bind="args">
          <template #title>
            <p><strong>Warning alert:</strong> lorem ipsum dolor sit amet</p>
          </template>
        </UiAlert>
      `,
  }),
};

export const Danger = {
  args: {
    state: 'danger'
  },

  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: 
      `
        <UiAlert v-bind="args">
          <template #title>
            <p><strong>Danger alert:</strong> lorem ipsum dolor sit amet</p>
          </template>
        </UiAlert>
      `,
  }),
};

export const Draft = {
  args: {
    state: 'draft'
  },

  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: 
      `
        <UiAlert v-bind="args">
          <template #title>
            <p><strong>Draft:</strong> lorem ipsum dolor sit amet</p>
          </template>
        </UiAlert>
      `,
  }),
};

export const Update = {
  args: {
    state: 'update'
  },

  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: 
      `
        <UiAlert v-bind="args">
          <template #title>
            <p class="color-inherit"><strong>Update:</strong> lorem ipsum dolor sit amet</p>
          </template>
        </UiAlert>
      `,
  }),
};

export const WithClose = {
  args: {
    closable: true
  },

  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: 
      `
        <UiAlert v-bind="args">
          <template #title>
            <p><strong>Information alert:</strong> lorem ipsum dolor sit amet</p>
          </template>
        </UiAlert>
      `,
  }),
};

export const WithBody = {

  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: 
      `
        <UiAlert v-bind="args">
          <template #title>
            <p><strong>Information alert:</strong> lorem ipsum dolor sit amet</p>
          </template>

          <template #body>
            <p>Alert with title and longer description, lorem ipsum dolor sit amet constrectum adipisicng lorem ipsum dolor sit amet consrectumis adipisingus.</p>
          </template>
        </UiAlert>
      `,
  }),
};

export const WideAndClose = {
  args: {
    wide: true,
    closable: true
  },

  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: 
      `
        <UiAlert v-bind="args">
          <template #title>
            <p><strong>Information alert:</strong> lorem ipsum dolor sit amet</p>
          </template>

          <template #body>
            <p>Alert with title and longer description, lorem ipsum dolor sit amet constrectum adipisicng lorem ipsum dolor sit amet consrectumis adipisingus.</p>
          </template>
        </UiAlert>
      `,
  }),
};

export const fixedBottom = {
  args: {
    closable: true,
    state: 'warning',
  },

  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: 
      `<div class="my-alert">
        <UiAlert v-bind="args" style="--alert-width: 1400px;">
          <template #title>
            <p><strong>Warning alert:</strong> lorem ipsum dolor sit amet</p>
          </template>
        </UiAlert>
      </div>
      `,
  }),
};

export const HideIcon = {
  args: {
    state: 'update',
    hideIcon: true,
  },

  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: 
      `
        <UiAlert v-bind="args">
          <template #title>
            <p class="color-inherit"><strong>Update:</strong> lorem ipsum dolor sit amet</p>
          </template>
        </UiAlert>
      `,
  }),
};