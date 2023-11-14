import { StoryFn } from "@storybook/react";
import Button from "../components/Button/Button";
import {AbcOutlined} from '@mui/icons-material';

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: "text",
      description: 'Text displayed inside button',
    },
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: 'radio' },
      description: 'Button Variant',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Button Size',
    }
  },
} ;

const Template: StoryFn<typeof Button> = (args)=><Button {...args} /> ;

export const Default = Template.bind({})
Default.args = {
  variant:"contained",
  children: "Button",
  size:"medium"
}

export const SecondButton = Template.bind({})
SecondButton.args = {
  variant:"contained",
  children: <AbcOutlined />,
  size:"medium"
}


