import { VueWrapper, mount } from '@vue/test-utils';
import WatchList from '@/views/WatchList.vue';
import { TextField, Card, Button, Tooltip } from '@/components/common';
import StockCard from '@/components/watchList/StockCard.vue';
import { Stock } from '@/entities/types/stock';

describe('WatchList.vue', () => {
  let wrapper: VueWrapper<any>;
    // Mock subscribed stocks
    const stocks: Stock[] = [
        {
        isin: 'US0378331005',
        price: 155.91160411945712,
        bid: 155.90160411945712,
        ask: 155.92160411945712,
    },
    {
        isin: 'DE0378331001',
        price: 155.91160411945712,
        bid: 155.90160411945712,
        ask: 155.92160411945712,
    }];

  beforeEach(() => {
    wrapper = mount(WatchList, {
        data() {
            return {
                stocks,
            };
        },
        global: {
            components: {
                TextField,
                Card,
                Button,
                StockCard,
                Tooltip
              },
        },
    });
  });

  it('renders the WatchList component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the heading correctly', () => {
    const heading = wrapper.find('.heading1');
    expect(heading.text()).toBe('Watch List');
  });

  it('renders the search box with correct elements', () => {
    const searchBox = wrapper.find('.search-box');
    expect(searchBox.exists()).toBe(true);

    const textField = searchBox.findComponent(TextField);
    expect(textField.exists()).toBe(true);
    expect(textField.props().name).toBe('isin');
    expect(textField.props().placeholder).toBe('Enter a isin');

    const tooltip = searchBox.findComponent(Tooltip);
    expect(tooltip.exists()).toBe(true);
    expect(tooltip.props().message).toBe('An ISIN is a 12-character alphanumeric code. Example:- US0378331005');

    const button = searchBox.findComponent(Button);
    expect(button.exists()).toBe(true);
    expect(button.classes()).toContain('search-box__button');
    expect(button.text()).toBe('Subscribe');
  });

  it('renders "No stocks subscribed" message when no stocks are subscribed', () => {
    const emptyWrapper = mount(WatchList);
    expect(emptyWrapper.find('p').text()).toBe('No stocks subscribed');
  });

});
