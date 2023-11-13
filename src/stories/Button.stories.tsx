import { StoryFn } from "@storybook/react";
import {Button} from "../components/Button/Button";

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: "Button",
    myVar: {
      options: ['1', '2'],
      control: { type: 'radio' },
    }
  },
} ;

const Template: StoryFn<typeof Button> = (args)=><Button {...args} /> ;

export const Default = Template.bind({})
Default.args = {
  label: "Button",
  myVar: "1"
}

export const SecondButton = Template.bind({})
SecondButton.args = {
  label: "My Sweet Button",
  myVar: "2"
}


