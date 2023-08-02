import { mount } from '@vue/test-utils';  
import DropDown from '../src/components/DropDown';

describe('DropDown', () => {
	it('it rendered', () => {
		const wrapper = mount(DropDown, {
			slots: {
				default: 'DropDownContent'
			}
		})

		expect(wrapper.html()).toContain('DropDownContent');
	})
})