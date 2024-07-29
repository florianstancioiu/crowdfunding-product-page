import '../../main.css';
import AmountInput from './AmountInput';

export default {
  title: 'UI/AmountInput',
  component: AmountInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: { control: 'number' },
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    prefix: { control: 'text' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    prefix: '$',
    value: 0,
    minValue: 0,
    maxValue: 100,
  },
};
