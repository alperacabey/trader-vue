import { shallowMount } from '@vue/test-utils';
import { Tooltip } from '@/components/common';

describe('Tooltip', () => {
  it('should display tooltip message when hovered', async () => {
    const message = 'This is a tooltip message';
    const wrapper = shallowMount(Tooltip, {
      props: {
        message: message,
      },
    });

    expect(wrapper.find('.custom-tooltip__container').exists()).toBe(false);

    await wrapper.find('.custom-tooltip__icon').trigger('mouseover');
    expect(wrapper.find('.custom-tooltip__container').isVisible()).toBe(true);

    await wrapper.find('.custom-tooltip__icon').trigger('mouseleave');
    expect(wrapper.find('.custom-tooltip__container').exists()).toBe(false);
  });
});
