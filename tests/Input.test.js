import { mount } from '@vue/test-utils'; 
import Input from '../src/components/Input';

describe('Input', () => {
  const wrapper = mount(Input);

  it('input render', () => {
		expect(wrapper.exists()).toBe(true);
	})

  it('check exist loader', async () => {
    await wrapper.setProps({
      loading: true,
    })

    expect(wrapper.find('[data-testid="loader"]').exists()).toBe(true);
  });

  it('check prop state - success become a class ui-input_success', async () => {
    await wrapper.setProps({
      state: 'success',
    })

    expect(wrapper.classes()).toContain('ui-input_success');
  });

  it('check prop size - lg become a class ui-input_lg', async () => {
    await wrapper.setProps({
      size: 'lg',
    })

    expect(wrapper.classes()).toContain('ui-input_lg');
  });

  it('modelValue should be updated', async () => {
    await wrapper.setProps({
      modelValue: '',
      'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
    })

    await wrapper.find('[data-testid="input"]').setValue('test');
    expect(wrapper.props('modelValue')).toBe('test');
  });

  it('text as string', async () => {
    await wrapper.setProps({
      text: 'text'
    })

    const text = wrapper.find('[data-testid="text"]');
  
    expect(text.classes()).not.toContain('ui-input__state');
  });

  it('text as object with state - success', async () => {
    await wrapper.setProps({
      state: 'success',
      text: {
        success: 'Успех!',
        warning: 'Предупреждение!!',
        danger: 'Опасно!!!',
      },
    })

    const text = wrapper.find('[data-testid="text"]');
  
    expect(text.classes()).toContain('ui-input__state');
    expect(text.text()).toBe('Успех!');
  });

  it('left and right icon', async () => {
    await wrapper.setProps({
      iconLeft: 'heart-fill',
      iconRight: 'heart-fill',
    })

    const iconLeft = wrapper.find('[data-testid="iconLeft"]');
    expect(iconLeft.exists()).toBe(true);

    const iconRight= wrapper.find('[data-testid="iconRight"]');
    expect(iconRight.exists()).toBe(true);
  });

  it('with clear event', async () => {
    const onClear = jest.fn();

    const wrapper = mount(Input, {
      attrs: {
        'onClear': onClear
      },

      props: {
        modelValue: '',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })

    await wrapper.find('[data-testid="input"]').setValue('test');

    const clearIcon = wrapper.find('[data-testid="clearable"]');

    expect(clearIcon.exists()).toBe(true);

    await clearIcon.trigger('click');

    expect(onClear).toHaveBeenCalled();
    expect(wrapper.emitted().clear[0]).toEqual([]);
  });

  it('without clear event', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })

    expect(wrapper.find('[data-testid="clearable"]').exists()).toBe(false);
  });

  it('clearable - false', async () => {
    const onClear = jest.fn();

    const wrapper = mount(Input, {
      attrs: {
        'onClear': onClear
      },
      props: {
        clearable: false,
        modelValue: '',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })

    expect(onClear).not.toHaveBeenCalled();
    expect(wrapper.find('[data-testid="clearable"]').exists()).toBe(false);
  });

  it('switch password visibility', async () => {
    await wrapper.setProps({
      type: 'password',
      passwordSwitch: true,
      modelValue: '',
      'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
    })
    
    const input = wrapper.find('[data-testid="input"]');
    
    await input.setValue('12345');

    const switchPassword = wrapper.find('[data-testid="passwordSwitch"]');
    
    expect(switchPassword.exists()).toBe(true);

    await switchPassword.trigger('click');

    expect(input.attributes().type).toBe('text');

    await switchPassword.trigger('click');

    expect(input.attributes().type).toBe('password');
  });

  it('toggle showStateIcons', async () => {
    await wrapper.setProps({
      state: 'success',
    })

    let icon = wrapper.find('[data-testid="showStateIcons"]');
    expect(icon.exists()).toBe(true);

    await wrapper.setProps({
      state: 'success',
      showStateIcons: false,
    })

    icon = wrapper.find('[data-testid="showStateIcons"]');
    expect(icon.exists()).toBe(false);
  });

  it('label', async () => {
    let label = wrapper.find('[data-testid="label"]');

    expect(label.exists()).toBe(false);

    await wrapper.setProps({
      labelText: 'Label',
    })

    label = wrapper.find('[data-testid="label"]');

    expect(label.exists()).toBe(true);
  });

  it('onCheckId fn in mounted hook called', async () => {
    const onCheckIdMethod = jest.spyOn(Input.methods, 'onCheckId');

    mount(Input);
    
    expect(onCheckIdMethod).toHaveBeenCalled();
  });

  it('masked input works', async () => {
    await wrapper.setProps({
      mask: '+7 (###) ###-##-##',
      modelValue: '',
      'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
    })
    
    await wrapper.find('[data-testid="input"]').setValue('9999074464');
    expect(wrapper.props('modelValue')).toBe('+7 (999) 907-44-64');
  });

  it('masked input works with unmasked event', async () => {

    const wrapper = mount(Input, {
      props: {
        mask: '+7 (###) ###-##-##',
        modelValue: '',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })

    await wrapper.find('[data-testid="input"]').setValue('9999074464');
    expect(wrapper.emitted().unmasked[0]).toEqual(['9999074464']);
  });
});
