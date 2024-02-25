import UiModal from "../src/components/Modal";
import UiButton from "../src/components/Button";
import './assets/main.scss';

export default {
  title: 'Elements/Modal',
  component: UiModal,
  tags: ['autodocs'],
};

export const Base = {
  render: (args) => ({
    components: { UiModal, UiButton },
    setup() {
      return { args };
    },
    data() {
      return {
        isOpen: false,
      };
    },
    template: `
        <UiButton @click="isOpen = true">open modal</UiButton>

        <UiModal v-bind="args" v-model:open="isOpen">
          <p style="text-align: center;">Place content here</p>
        </UiModal>
    `,
  }),
};
