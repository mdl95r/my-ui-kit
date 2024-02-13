import UiButton from '../src/components/Button';
import './assets/main.scss';

export default {
  title: 'Elements/Button',
  component: UiButton,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'clear'],
    },
    shape: {
      control: 'select',
      options: ['', 'square', 'circle'],
    },
    typeButton: {
      control: 'select',
      options: ['button', 'submit'],
    },
    view: {
      control: 'select',
      options: ['', 'danger', 'success'],
    },
  },
};

export const ButtonPrimary = {

  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: 
      `
        <div style="position: relative;">
          <UiButton v-bind="args">Button Text</UiButton>
        </div>
      `,
  }),
};

export const ButtonPrimaryWithIconsLarge = {
  args: {
    iconLeft: 'user',
    iconRight: 'user',
    loading: true,
    size: 'lg'
  },

  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: 
      `
        <div style="position: relative;">
          <UiButton v-bind="args">Button Text</UiButton>
        </div>
      `,
  }),
};

export const ButtonPrimaryCircle = {
  args: {
    shape: 'circle',
    iconLeft: 'user',
  },

  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: 
      `
        <div style="position: relative;">
          <UiButton v-bind="args" />
        </div>
      `,
  }),
};

export const ButtonPrimarySuccess = {
  args: {
    view: 'success',
  },

  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: 
      `
        <div style="position: relative;">
          <UiButton v-bind="args">Button Text</UiButton>
        </div>
      `,
  }),
};

export const ButtonPrimaryDanger = {
  args: {
    view: 'danger',
  },

  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: 
      `
        <div style="position: relative;">
          <UiButton v-bind="args">Button Text</UiButton>
        </div>
      `,
  }),
};

export const ButtonSecondary = {
  args: {
    variant: 'secondary',
  },

  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: 
      `
        <div style="position: relative;">
          <UiButton v-bind="args">Button Text</UiButton>
        </div>
      `,
  }),
};

export const ButtonSecondarySuccess = {
  args: {
    variant: 'secondary',
    view: 'success',
  },

  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: 
      `
        <div style="position: relative;">
          <UiButton v-bind="args">Button Text</UiButton>
        </div>
      `,
  }),
};

export const ButtonSecondaryDanger = {
  args: {
    variant: 'secondary',
    view: 'danger',
  },

  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: 
      `
        <div style="position: relative;">
          <UiButton v-bind="args">Button Text</UiButton>
        </div>
      `,
  }),
};

export const ButtonTertiary = {
  args: {
    variant: 'tertiary',
  },

  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: 
      `
        <div style="position: relative;">
          <UiButton v-bind="args">Button Text</UiButton>
        </div>
      `,
  }),
};

export const ButtonTertiarySuccess = {
  args: {
    variant: 'tertiary',
    view: 'success',
  },

  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: 
      `
        <div style="position: relative;">
          <UiButton v-bind="args">Button Text</UiButton>
        </div>
      `,
  }),
};

export const ButtonTertiaryDanger = {
  args: {
    variant: 'tertiary',
    view: 'danger',
  },

  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: 
      `
        <div style="position: relative;">
          <UiButton v-bind="args">Button Text</UiButton>
        </div>
      `,
  }),
};

export const ButtonSquareWithIcon = {
  args: {
    variant: 'tertiary',
    iconLeft: 'user',
    shape: 'square'
  },

  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: 
      `
        <div style="position: relative;">
          <UiButton v-bind="args" />
        </div>
      `,
  }),
};