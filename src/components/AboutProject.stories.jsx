import AboutProject from './AboutProject';
import { Provider } from 'react-redux';
import store from '../store';

export default {
  title: 'Components/AboutProject',
  component: AboutProject,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ width: '740px' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {},
};
