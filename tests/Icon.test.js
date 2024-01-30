import { mount } from '@vue/test-utils';  
import Icon from '../src/components/Icon';

describe('Icon', () => {
  const wrapper = mount(Icon, {
    props: {
      name: 'bell'
    }
  });

  it('icon render', () => {
		expect(wrapper.exists()).toBe(true);
	})

	it('name rendered', () => {
		expect(wrapper.classes()).toContain('pi-bell');
	})

	it('sizeEm rendered', () => {
		expect(wrapper.classes()).not.toContain('icon_md');
	})

	it('size rendered', async () => {
		await wrapper.setProps({
			sizeEm: false,
		})

		expect(wrapper.classes()).toContain('icon_md');
	})
});