import App from './App';
import { Provider } from 'react-redux';
import store from './store';

export default {
  title: 'Pages/CrowdfundingProduct',
  component: App,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    //layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ backgroundColor: '#fafafa' }}>
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
