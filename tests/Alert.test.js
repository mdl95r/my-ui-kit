import { mount } from '@vue/test-utils';  
import Alert from '../src/components/Alert';

describe('Alert', () => {
  const wrapper = mount(Alert);

  it('Alert render', () => {
		expect(wrapper.exists()).toBe(true);
	})

  it('success state', async () => {
    await wrapper.setProps({
			state: 'success',
		})

    expect(wrapper.classes('ui-alert_success')).toBe(true);
  });

  it('close emit', async () => {
    await wrapper.setProps({
			closable: true,
		})
    
    await wrapper.find('[data-test-id="closableButton"]').trigger('click');
    
    expect(wrapper.emitted()).toHaveProperty('close');
  });
});