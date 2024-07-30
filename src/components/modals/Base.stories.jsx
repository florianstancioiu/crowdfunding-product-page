import Base from './Base';
import { Provider } from 'react-redux';
import store from '../../store';
import { fn } from '@storybook/test';

export default {
  title: 'Modals/Base',
  component: Base,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    //layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' },
    children: { control: 'object' },
    hasCloseBtn: { control: 'boolean' },
    extraClasses: { control: 'text' },
  },
  args: { onOverlayClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    title: 'Lorem Ipsum',
    hasCloseBtn: true,
  },
};

export const NoCloseBtn = {
  args: {
    title: 'Lorem Ipsum',
    hasCloseBtn: false,
  },
};

export const HasChildren = {
  args: {
    title: 'Lorem Ipsum',
    hasCloseBtn: false,
    children: (
      <>
        <h1>Lorem Ipsum h1</h1>
        <div
          style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}
        ></div>
      </>
    ),
  },
};
