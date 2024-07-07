import { Loader } from "src/components/Loader";
import React from "react";

export const useButtonIcon = ({
	isLoading,
	iconPlacement,
	iconComponent,
	size,
}: {
	iconPlacement: "start" | "end";
	isLoading: boolean;
	iconComponent?: JSX.Element;
	size?: "small" | "large";
}) => {
	const buttonIcon = iconComponent ? iconComponent : null;

	const component = isLoading ? <Loader size={size} /> : buttonIcon;

	switch (iconPlacement) {
		case "start":
			return { startButtonIcon: component };
		case "end":
			return { endButtonIcon: component };
		default:
			return {};
	}
};
