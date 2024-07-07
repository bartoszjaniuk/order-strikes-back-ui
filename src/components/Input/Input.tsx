import React from "react";

const getStyleForState = {
	default: "bg-white border-gray-300 text-gray-900 focus:outline-primary",
	disabled: "disabled:bg-gray-100 disabled:cursor-not-allowed",
	error: "bg-red-50 border-red-500 text-red-500 focus:outline-none",
};

const ErrorIcon = () => <span>🔥</span>;

const useGetInputState = ({
	isDisabled,
	isLoading,
	errorMessage,
}: {
	isDisabled?: boolean;
	isLoading?: boolean;
	errorMessage?: string;
}) => {
	if (errorMessage) return "error";
	if (isDisabled || isLoading) return "disabled";
	return "default";
};

type Props = {
	label?: string;
	isLoading?: boolean;
	isDisabled?: boolean;
	/**
	 * Optional errorMessage. Desired for validation errors.
	 */
	errorMessage?: string;
	/**
	 * Optional icon placement. Default is set to end.
	 */
	iconComponent?: JSX.Element;
	isFullWidth?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled">;

export const Input = (props: Props) => {
	const {
		type = "text",
		label,
		id,
		isDisabled,
		isLoading,
		errorMessage,
		iconComponent,
		isFullWidth = false,
		...rest
	} = props;

	const inputState = useGetInputState({ errorMessage, isDisabled, isLoading });

	const styles = getStyleForState[inputState];

	const width = isFullWidth ? "w-full lg:w-full" : "w-full lg:w-fit";

	return (
		<div className={`mb-6 ${width}`}>
			{label ? (
				<label
					htmlFor={id}
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					{label}
				</label>
			) : null}
			<div className="relative">
				<input
					{...rest}
					disabled={isDisabled || isLoading}
					type="text"
					className={`border text-sm rounded-md block p-2.5 ${styles} ${width}`}
				/>
				{!errorMessage && iconComponent ? (
					<span className="absolute right-3 top-1/2 transform -translate-y-1/2">
						{iconComponent}
					</span>
				) : null}

				{errorMessage ? (
					<span className="absolute right-3 top-1/2 transform -translate-y-1/2">
						<ErrorIcon />
					</span>
				) : null}
			</div>
			{errorMessage ? (
				<p className="mt-2 text-sm text-red-600 dark:text-red-500">
					{errorMessage}
				</p>
			) : null}
		</div>
	);
};
