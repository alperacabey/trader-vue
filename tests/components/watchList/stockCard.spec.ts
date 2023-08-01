import { VueWrapper, mount } from '@vue/test-utils';
import StockCard from '@/components/watchList/StockCard.vue';
import Button from '@/components/common/Button.vue';
import Card from '@/components/common/Card.vue';
import { Stock } from '@/entities/types/stock';

describe('StockCard.vue', () => {
  let wrapper: VueWrapper<any>;

  const stock: Stock = {
    isin: 'US0378331005',
    price: 155.91160411945712,
    bid: 155.90160411945712,
    ask: 155.92160411945712,
  };

  beforeEach(() => {
    wrapper = mount(StockCard, {
      props: { stock },
      global: {
        components: {
          Button,
          Card,
        },
      },
    });
  });

  it('renders the stock card component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the stock card component with the data', () => {
    expect(wrapper.text()).toContain(stock.isin);
    expect(wrapper.text()).toContain(stock.price.toFixed(2));
    expect(wrapper.text()).toContain(stock.bid.toFixed(2));
    expect(wrapper.text()).toContain(stock.ask.toFixed(2));
  });

  it('emits "unsubscribe" event when unsubscribe button is clicked', async () => {
    await wrapper.findComponent(Button).trigger('click');
    expect(wrapper.emitted('unsubscribe')).toBeTruthy();
  });
});
