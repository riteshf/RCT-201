import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MyButton from "./MyButton";

export default {
  title: "components/MyButton",
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
};

export const ClickableButton = Template.bind({});
ClickableButton.args = {
  onClick: () => console.log("Hello"),
};
