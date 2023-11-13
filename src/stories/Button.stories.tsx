import { StoryFn } from "@storybook/react";
import {Button} from "../components/Button/Button";

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: "text",
      description: 'Text displayed inside button',
    },
    myVar: {
      control: { type: 'radio' },
      description: 'Number added to text',
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


