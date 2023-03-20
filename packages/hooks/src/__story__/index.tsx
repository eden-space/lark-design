import React from 'react';
import { ComponentMeta } from '@storybook/react';

const Test = (props) => {
  console.log(props);
  return <>test</>;
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Hooks/test',
  component: Test,
} as ComponentMeta<typeof Test>;

export const a = () => {
  return (
    <div>
      <Test />
      <div>1</div>
      <Test />
    </div>
  );
};
