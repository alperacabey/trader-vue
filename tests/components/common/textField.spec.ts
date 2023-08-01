import { shallowMount } from '@vue/test-utils';
import { TextField } from '@/components/common';

describe('TextField.vue', () => {
  it('should render text field successfully', () => {
    const wrapper = shallowMount(TextField);
    expect(wrapper.classes()).toContain('text-field');
  });
  
  it('should render text field with proper class when error', async () => {
    const wrapper = shallowMount(TextField);
    const errorMessage = 'Invalid ISIN';
    await wrapper.setProps({ error: errorMessage });
    expect(wrapper.find('p').classes()).toContain('text-field__error-message');
    expect(wrapper.find('p').text()).toContain(errorMessage);
  });
});
