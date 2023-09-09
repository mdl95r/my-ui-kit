import { mount } from '@vue/test-utils';  
import DropDown from '../src/components/DropDown';

test('DropDown render', () => {
  const wrapper = mount(DropDown, {
    slots: {
      default: 'DropDownContent'
    }
  })

  expect(wrapper.html()).toContain('DropDownContent');
})