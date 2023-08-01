import { shallowMount } from '@vue/test-utils';
import Header from '@/components/layout/Header.vue';

describe('Header.vue', () => {
  it('renders the header with correct navigation links', () => {
    const activeRoute = 'Home';
    const wrapper = shallowMount(Header, {
      props: { activeRoute },
    });

    const navLinks = wrapper.findAll('.header__nav-link');

    expect(navLinks.length).toBe(2);
    expect(navLinks[0].text()).toBe('Home');
    expect(navLinks[1].text()).toBe('Watch List');
  });
});
