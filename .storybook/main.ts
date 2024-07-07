import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-webpack5-compiler-swc",
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		"@storybook/addon-styling-webpack",
		{
			name: "@storybook/addon-postcss",
			options: {
				cssLoaderOptions: {
					importLoaders: 1,
				},
				postcssLoaderOptions: {
					implementation: require("postcss"),
					// FIXME:THIS HELPED ME A LOT
					// https://stackoverflow.com/questions/65495912/storybook-tailwind-how-should-i-add-tailwind-to-storybook
				},
			},
		},
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},

	webpackFinal: async (config) => {
		config.resolve = {
			...config.resolve,
			alias: {
				src: path.resolve(__dirname, "../src"),
			},
		};

		return config;
	},
};
export default config;
