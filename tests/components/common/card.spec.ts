import { shallowMount } from '@vue/test-utils';
import { Card } from '@/components/common';

describe('Card.vue', () => {
  it('should render card component with provided content', () => {
    const content = 'Test Content';
    const wrapper = shallowMount(Card, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).toContain(content);
    expect(wrapper.classes()).toContain('card');
  });
});
