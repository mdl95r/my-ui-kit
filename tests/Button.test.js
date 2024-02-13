import { mount } from '@vue/test-utils';  
import Button from '../src/components/Button';

describe('Button', () => {
	const wrapper = mount(Button);

  it('Button render', () => {
		expect(wrapper.exists()).toBe(true);
	})

  it('Button with "a" tag', async () => {
    const link = 'https://www.google.ru/'

    await wrapper.setProps({
			href: link,
		})

    expect(wrapper.find('a').exists()).toBe(true);
    expect(wrapper.attributes('href')).toBe(link);
  })

  it('Button disabled', async () => {
    await wrapper.setProps({
			disabled: true
		})

    expect(wrapper.attributes('disabled'));
  })

  it('render default slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Text'
      }
    })

    expect(wrapper.html()).toContain('Text');
  })
});