import '../../main.css';
import Stand from './Stand';
import { fn } from '@storybook/test';

export default {
  title: 'UI/Stand',
  component: Stand,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' },
    disabled: { control: 'boolean' },
    description: { control: 'text' },
    pledge: { control: 'number' },
    amountLeft: { control: 'number' },
  },
  args: { onSelectRewardClick: fn() },
};

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id libero justo. Praesent molestie sagittis posuere. Nulla imperdiet condimentum est, sed pretium metus pharetra in. Integer semper laoreet lectus, id ultrices velit eleifend nec. Nunc non faucibus lacus. In nec felis sit amet quam gravida euismod in et urna. Phasellus eget ullamcorper eros, eu ullamcorper elit. Donec lectus nisl, placerat nec commodo id, dignissim vitae sapien. Morbi finibus commodo odio at cursus.`;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    title: 'Lorem Ipsum',
    disabled: false,
    description,
    pledge: 20,
    amountLeft: 111,
  },
};

export const NoneLeft = {
  args: {
    title: 'Lorem Ipsum',
    disabled: false,
    description,
    pledge: 20,
    amountLeft: 0,
  },
};
