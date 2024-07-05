export const useVariant = (variant: "white" | "black") => {
	const darkButton =
		"bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 disabled:cursor-not-allowed disabled:hover:bg-gray-800 disabled:opacity-65";
	const lightButton =
		"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 disabled:cursor-not-allowed disabled:hover:bg-white disabled:opacity-65";

	const buttonVariant = variant === "white" ? lightButton : darkButton;

	return buttonVariant;
};
