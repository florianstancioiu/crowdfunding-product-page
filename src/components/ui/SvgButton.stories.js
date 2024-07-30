import SvgButton from './SvgButton';
import checkSvg from '../../images/icon-check.svg';

export default {
  title: 'UI/SvgButton',
  component: SvgButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    svg: { control: 'text' },
    className: { control: 'text' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    svg: checkSvg,
    className: '',
  },
};
