import { ref } from 'vue';
import UiPagination from '../src/components/Pagination';
import './assets/main.scss';

export default {
  title: 'Elements/Pagination',
  component: UiPagination,
  tags: ['autodocs'],
};

export const Base = {
  render: (args) => ({
    components: { UiPagination },
    setup() {
      const currentPage = ref(1);

      return { args, currentPage };
    },
    template: `
        <UiPagination v-bind="args" :total="100" :pageSize="5" v-model:currentPage="currentPage" />
    `,
  }),
};
