import { mount } from '@vue/test-utils';  
import Switch from '../src/components/Switch';

describe('Switch', () => {
  const wrapper = mount(Switch);

  it('Switch render', () => {
		expect(wrapper.exists()).toBe(true);
	})
});