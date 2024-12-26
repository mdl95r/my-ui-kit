import Badge from '../src/components/Badge';
import './assets/main.scss';

export default {
  title: 'Elements/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
};

export const Base = {
  args: {
    text: 'Badge',
  },
};
