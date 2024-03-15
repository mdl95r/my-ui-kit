import Avatar from '../src/components/Avatar';
import './assets/main.scss';

export default {
  title: 'Elements/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
  }
};

export const noAuth = {};

export const WithImage = {
  args: {
    user: {
      firstName: 'John',
      lastname: 'Doe',
      image: 'https://i.pravatar.cc/150?img=3',
    },
  },
};

export const WithoutImage = {
  args: {
    user: {
      firstName: 'John',
      lastname: 'Doe',
    },
  },
};

export const FirstNameOnly = {
  args: {
    user: {
      firstName: 'John',
    },
  },
};

export const LastNameOnly = {
  args: {
    user: {
      lastName: 'Doe',
    },
  },
};

export const WithoutBorder = {
  args: {
    borderNone: true,
    links: {
      authorized: {
        tag: 'a',
        config: {
          href: 'https://github.com',
          target: '_blank',
        }
      },
    },
    user: {
      firstName: 'John',
      lastname: 'Doe',
    },
  },
};

export const SquareShape = {
  args: {
    shape: 'square',
    user: {
      firstName: 'John',
      lastname: 'Doe',
    },
  },
};