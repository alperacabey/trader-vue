import { VueWrapper, shallowMount } from '@vue/test-utils';
import { Button } from '@/components/common';

describe('Button.vue', () => {
  let wrapper: VueWrapper<any>;
  let button: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(Button);
    button = wrapper.findComponent(Button);
  });

  it('should render button with proper class when not disabled', () => {
    expect(button.classes()).toContain('button');
    expect(button.classes()).not.toContain('button--disabled');
  });

  it('should render button with proper class when disabled', async () => {
    await wrapper.setProps({ disabled: true });
    expect(button.classes()).toContain('button');
    expect(button.classes()).toContain('button--disabled');
  });

  it('should emit click event when clicked and not disabled', () => {
    button.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('should not emit click event when clicked and disabled', async () => {
    await wrapper.setProps({ disabled: true });
    button.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });
});
