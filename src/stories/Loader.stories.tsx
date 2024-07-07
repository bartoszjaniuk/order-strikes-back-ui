import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Loader } from "src/components/Loader";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Example/Loader",
	component: Loader,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
	args: {
		size: "small",
	},
};

export const Large: Story = {
	args: {
		size: "large",
	},
};
