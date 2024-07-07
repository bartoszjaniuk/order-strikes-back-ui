import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input } from "src/components/Input";

const meta = {
	title: "Example/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
	args: {
		placeholder: "Placeholder",
		label: "With Label",
	},
};

export const WithoutLabel: Story = {
	args: {
		placeholder: "Placeholder",
	},
};

export const Disabled: Story = {
	args: {
		label: "Disabled",
		isDisabled: true,
	},
};

export const Error: Story = {
	args: {
		label: "Field with Error",
		errorMessage: "Coś poszlo nie tak...",
	},
};

export const FullWidth: Story = {
	args: {
		isLoading: true,
	},

	decorators: (Story) => (
		<div className="w-screen">
			<Story args={{ isFullWidth: true, label: "Field with Full Width" }} />
		</div>
	),
};

export const WithIcon: Story = {
	args: {
		label: "Field with Icon",
		iconComponent: <span>🚀</span>,
	},
};
