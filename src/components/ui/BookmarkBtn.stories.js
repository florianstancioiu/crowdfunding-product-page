import '../../main.css';
import BookmarkBtn from './BookmarkBtn';

export default {
  title: 'UI/BookmarkBtn',
  component: BookmarkBtn,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {},
};
