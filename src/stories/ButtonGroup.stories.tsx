import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "src/components/Button";
import { ButtonGroup, directions } from "src/components/ButtonGroup";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Example/ButtonGroup",
	component: ButtonGroup,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		controls: {
			exclude: ["children"],
		},
	},

	tags: ["autodocs"],
	argTypes: {
		direction: {
			options: Object.values(directions),
			control: { type: "select" },
		},
	},
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		children: [
			<>
				<Button
					iconComponent={<span>🚀</span>}
					iconPlacement="start"
					variant="black"
				>
					Black
				</Button>
				<Button iconComponent={<span>🚀</span>} variant="white">
					White
				</Button>
			</>,
		],
	},
};
