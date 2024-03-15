import { mount } from '@vue/test-utils';  
import Avatar from '../src/components/Avatar';

describe('Avatar', () => {
  const wrapper = mount(Avatar);

  it('Avatar render', () => {
		expect(wrapper.exists()).toBe(true);
	})

  it('not authorized with link', async () => {
    const links = {
      unauthorized: {
        tag: 'a',
        config: {
          href: '/login',
          target: '_blank',
        }
      },
    }

    await wrapper.setProps({
      links,
    })

    expect(wrapper.classes('ui-avatar_unauthorized')).toBe(true);
    expect(wrapper.find('[data-test-id="unauthorized-link"]').exists()).toBe(true);
  });

  it('with image', async () =>{
    await wrapper.setProps({
      user: {
        image: 'https://i.pravatar.cc/150?img=3',
        firstName: 'John',
        lastname: 'Doe',
      }
    })

    expect(wrapper.find('[data-test-id="img"]').exists()).toBe(true);
  });

  it('first name only', async () => {
    const firstName = 'John';

    await wrapper.setProps({
      user: {
        firstName,
      }
    })

    expect(wrapper.find('[data-test-id="text"]').text()).toBe(firstName.at(0));
  });

  it('last name only', async () => {
    const lastName = 'Doe';

    await wrapper.setProps({
      user: {
        lastName,
      }
    })

    expect(wrapper.find('[data-test-id="text"]').text()).toBe(lastName.at(0));
  });


  it('first and last name', async () => {
    const firstName = 'John';
    const lastName = 'Doe';

    await wrapper.setProps({
      user: {
        firstName,
        lastName,
      }
    })

    expect(wrapper.find('[data-test-id="text"]').text()).toBe(`${firstName.at(0)}${lastName.at(0)}`);
  });

  it('without border', async () => {
    await wrapper.setProps({
      borderNone: true,
      user: {
        firstName: 'John',
        lastName: 'Doe',
      }
    })

    expect(wrapper.classes('ui-avatar_border-none')).toBe(true);
  });

  it('with link', async () => {
    const links = {
      authorized: {
        tag: 'a',
        config: {
          href: 'https://github.com',
          target: '_blank',
        }
      },
    }

    await wrapper.setProps({
      links,
      user: {
        firstName: 'John',
        lastName: 'Doe',
      }
    })

    expect(wrapper.find('[data-test-id="link"]').exists()).toBe(true);
  });

  it('square shape', async () => {
    await wrapper.setProps({
      shape: 'square',
      user: {
        firstName: 'John',
        lastName: 'Doe',
      }
    })

    expect(wrapper.classes('ui-avatar_square')).toBe(true);
  })
})