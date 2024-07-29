import '../../main.css';
import ModalPledge from './ModalPledge';
import { Provider } from 'react-redux';
import store from '../../store';

/**
 * Note: If you use JSX inside the .stories.js file, you need to rename it to .jsx extension otherwise there will be errors
 */
export default {
  title: 'UI/ModalPledge',
  component: ModalPledge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    id: { control: 'number' },
    isSelected: { control: 'boolean' },
    title: { control: 'text' },
    description: { control: 'text' },
    pledge: { control: 'number' },
    minimumPledge: { control: 'number' },
    maximumPledge: { control: 'number' },
    remainingPledges: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id libero justo. Praesent molestie sagittis posuere. Nulla imperdiet condimentum est, sed pretium metus pharetra in. Integer semper laoreet lectus, id ultrices velit eleifend nec. Nunc non faucibus lacus. In nec felis sit amet quam gravida euismod in et urna. Phasellus eget ullamcorper eros, eu ullamcorper elit. Donec lectus nisl, placerat nec commodo id, dignissim vitae sapien. Morbi finibus commodo odio at cursus.`;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    id: 1,
    isSelected: false,
    title: 'Lorem Ipsum',
    description,
    pledge: 20,
    minimumPledge: 20,
    maximumPledge: 50,
    remainingPledges: 111,
  },
};

export const Selected = {
  args: {
    id: 2,
    isSelected: true,
    title: 'Lorem Ipsum',
    description,
    pledge: 20,
    minimumPledge: 20,
    maximumPledge: 50,
    remainingPledges: 111,
  },
};

export const WithoutPledge = {
  args: {
    id: 2,
    isSelected: false,
    title: 'Lorem Ipsum',
    description,
    pledge: 20,
    minimumPledge: 0,
    maximumPledge: 50,
    remainingPledges: 111,
  },
};
