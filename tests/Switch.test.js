import { mount } from '@vue/test-utils';  
import Switch from '../src/components/Switch';

describe('Switch', () => {
  const wrapper = mount(Switch);

  it('Switch render', () => {
		expect(wrapper.exists()).toBe(true);
	})

  it('Switch emitting update:modelValue', async () => {
    const wrapper = mount(Switch, {
      attachTo: document.body,
      props: {
        modelValue: false,
        'update:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })

    await wrapper.find('[data-test-id="switch"]').trigger('click');
    
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
	})
});