import ThankYou from './ThankYou';
import { Provider } from 'react-redux';
import store from '../../store';
import { fn } from '@storybook/test';

export default {
  title: 'Modals/ThankYou',
  component: ThankYou,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    //layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    show: { control: 'boolean' },
  },
  args: { onOverlayClick: fn() },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    show: true,
  },
};
