import { mount } from '@vue/test-utils';
import Select from '../src/components/Select';

export const selectOptions = [
  { id: 1, name: 'text-1' },
  { id: 2, name: 'text-2' },
  { id: 3, name: 'text-3' },
  { id: 4, name: 'text-4' },
  { id: 5, name: 'text-5' },
  { id: 6, name: 'text-6' },
]

describe('Select', () => {
  const wrapper = mount(Select);

  it('select render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('without option slot', async () => {
    await wrapper.setProps({
      options: selectOptions,
    });

    expect(wrapper.find('[data-testid="option-1"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="custom-option"]').exists()).toBe(false);
  });

  it('slot custom option render', () => {
    const html = '<div class="ui-select__custom-list-item" data-testid="custom-option">SomeOption</div>';

    const wrapper = mount(Select, {
      props: {
        options: selectOptions,
      },

      slots: {
        options: html,
      },
    });

    expect(wrapper.find('[data-testid="custom-option"]').html()).toContain(html);
  });

  it('right icon', async () => {
    expect(wrapper.find('[data-testid="iconRight"]').classes()).toContain('pi-angle-down');

    await wrapper.setProps({
      iconRight: 'heart-fill',
    });

    expect(wrapper.find('[data-testid="iconRight"]').classes()).toContain('pi-heart-fill');
  });

  it('toggle dropdown', async () => {
    await wrapper.trigger('click');

    expect(wrapper.find('[data-testid="dropdown"]').isVisible()).toBe(true);

    await wrapper.trigger('click');

    expect(wrapper.find('[data-testid="dropdown"]').isVisible()).toBe(false);
  });

  it('choose option', async () => {
    await wrapper.setProps({
      modelValue: '',
      options: selectOptions,
      'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
    });

    await wrapper.trigger('click');

    await wrapper.find('[data-testid="option-1"]').trigger('click');

    expect(wrapper.props().modelValue).toEqual({ id: 1, name: 'text-1' });
  });

  it('multiselect', async () => {
    const wrapper = mount(Select, {
      props: {
        multiselect: true,
        modelValue: '',
        options: selectOptions,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    });

    await wrapper.trigger('click');

    const first = wrapper.find('[data-testid="option-1"]');
    await first.trigger('click');

    const second = wrapper.find('[data-testid="option-2"]');
    await second.trigger('click');

    expect(wrapper.props().modelValue).toBe('text-1, text-2');
  });

  it('search fields', async () => {
    const wrapper = mount(Select, {
      props: {
        searchable: true,
        modelValue: { id: 2, name: 'text-2' },
        options: selectOptions,
        'onUpdate:model-value': (e) => wrapper.setProps({ modelValue: e }),
      },
    });

    const option = wrapper.find('[data-testid="option-2"]');

    expect(option.text()).toBe('text-2');
  });

  it('number selected items more than multiselectCount', async () => {
    const wrapper = mount(Select, {
      props: {
        multiselect: true,
        modelValue: '',
        options: selectOptions,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    });

    await wrapper.trigger('click');

    const numOptions = 6;

    for (let i = 1; i <= numOptions; i++) {
      const el = wrapper.find(`[data-testid="option-${i}"]`);
      await el.trigger('click');
    }

    expect(wrapper.props().modelValue).toBe('Выбрано: 6');
  });
});
