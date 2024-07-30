import BackThisProject from './BackThisProject';
import { Provider } from 'react-redux';
import store from '../../store';
import { fn } from '@storybook/test';

export default {
  title: 'Modals/BackThisProject',
  component: BackThisProject,
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
    selectedPledge: { control: 'number' },
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
    selectedPledge: null,
  },
};

export const NoRewardSelected = {
  args: {
    show: true,
    selectedPledge: 1,
  },
};

export const BambooStandSelected = {
  args: {
    show: true,
    selectedPledge: 2,
  },
};
