import Menu from './Menu';

export default {
  title: 'UI/Menu',
  component: Menu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    showOnDesktop: { control: 'boolean' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ShowOnDesktop = {
  args: {
    showOnDesktop: true,
  },
};

export const ShowOnMobile = {
  args: {
    showOnDesktop: false,
  },
};
