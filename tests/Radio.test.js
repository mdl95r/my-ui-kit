

import { mount } from '@vue/test-utils';  
import Radio from '../src/components/Radio';

describe('Radio', () => {
  it('Radio render', () => {
    const wrapper = mount(Radio);

		expect(wrapper.exists()).toBe(true);
	})

  it('Radio emitting update:modelValue', async () => {
    const wrapper = mount(Radio, {
      attachTo: document.body,
      props: {
        modelValue: false,
        'update:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })

    await wrapper.find('[data-test-id="radio"]').trigger('click');
    
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
	})
});