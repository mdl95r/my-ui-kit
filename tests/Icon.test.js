import { mount } from '@vue/test-utils';  
import Icon from '../src/components/Icon';

describe('Icon', () => {
	const wrapper = mount(Icon);

	it('name rendered', async () => {
		await wrapper.setProps({
			name: 'bell'
		})

		expect(wrapper.classes()).toContain('pi-bell');
	})

	it('sizeEm rendered', () => {
		expect(wrapper.classes()).not.toContain('icon_md');
	})

	it('size rendered', async () => {
		await wrapper.setProps({
			sizeEm: false
		})

		expect(wrapper.classes()).toContain('icon_md');
	})
});