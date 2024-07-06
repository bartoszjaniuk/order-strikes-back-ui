import { useVariant } from "./hooks/useVariant";
import { useButtonIcon } from "./hooks/useButtonIcon";
import "../../styles/style.css";

const getSize = {
	small: "btn-sm",
	large: "btn-lg",
};

type ButtonProps = {
	/**
	 * Button content.
	 */
	children?: string | JSX.Element;
	/**
	 * The default behavior of the button, "button" has no default action, "submit" submits form data and "reset" resets all controls to their initial values.
	 */
	type?: "submit" | "reset" | "button";
	/**
	 * Optional icon component.
	 */
	iconComponent?: JSX.Element;
	/**
	 * Optional icon placement. Default is set to end.
	 */
	iconPlacement?: "start" | "end";
	/**
	 * Optional variant. Default is set to white.
	 */
	variant?: "white" | "black";
	/**
	 * Flag indicating whether the button should be disabled or not.
	 */
	isDisabled?: boolean;
	/**
	 * Flag indicating whether the button should be stretched to full width of the container component.
	 */
	isFullWidth?: boolean;
	/**
	 * Sets size of the component, possible varuabts: small or large.
	 */
	size?: "small" | "large";
	/**
	 * Flag indicating whether the button should have loader.
	 */
	isLoading?: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">;

export const Button = ({
	children,
	iconComponent,
	iconPlacement = "end",
	variant = "white",
	isDisabled = false,
	isFullWidth = false,
	size = "small",
	isLoading = false,
	...rest
}: ButtonProps) => {
	const buttonVariant = useVariant(variant);
	const { startButtonIcon, endButtonIcon } = useButtonIcon({
		isLoading,
		iconPlacement,
		iconComponent,
		size,
	});
	const computedWidth = isFullWidth
		? `w-full justify-center ${getSize[size]}`
		: getSize[size];

	return (
		<button
			{...rest}
			className={`font-medium rounded-lg text-sm me-2 mb-2 flex gap-2 cursor-pointer  ${buttonVariant} ${computedWidth}`}
			disabled={isLoading || isDisabled}
		>
			{startButtonIcon}
			{children}
			{endButtonIcon}
		</button>
	);
};
