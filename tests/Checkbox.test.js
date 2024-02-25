

import { mount } from '@vue/test-utils';  
import Checkbox from '../src/components/Checkbox';

describe('Checkbox', () => {
  
  it('Checkbox render', () => {
    const wrapper = mount(Checkbox);

		expect(wrapper.exists()).toBe(true);
	})

  it('Checkbox emitting update:modelValue', async () => {
    const wrapper = mount(Checkbox, {
      attachTo: document.body,
      props: {
        modelValue: false,
        'update:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })

    await wrapper.find('[data-test-id="checkbox"]').trigger('click');
    
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
	})
});