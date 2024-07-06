export type Direction = "row" | "column" | "column-reverse" | "row-reverse";
export type ResponsiveDirection = Direction | [Direction, Direction];

type TailwindDirections =
	| "flex-row"
	| "flex-col"
	| "flex-col-reverse"
	| "flex-row-reverse";

const directionMap: Record<Direction, TailwindDirections> = {
	row: "flex-row",
	column: "flex-col",
	"row-reverse": "flex-row-reverse",
	"column-reverse": "flex-col-reverse",
};

type Props = {
	/**
	 * Button, only Button component should be used here.
	 */
	children: JSX.Element[];
	/**
	 * Determines how Buttons are placed in the ButtonGroup, responsive.
	 */
	direction?: ResponsiveDirection;
} & React.ButtonHTMLAttributes<HTMLDivElement>;

export const ButtonGroup = (props: Props) => {
	const { children, direction = ["column", "row"], ...rest } = props;
	const responsiveDirection = getResponsiveClassName(direction);
	return (
		<div {...rest} className={`w-full lg:w-fit ${responsiveDirection}`}>
			{children}
		</div>
	);
};

const getResponsiveClassName = (direction: ResponsiveDirection) => {
	includePossibleClasses();
	if (Array.isArray(direction)) {
		const [mobileKey, desktopKey] = direction;
		return `flex ${directionMap[mobileKey]} lg:${directionMap[desktopKey]}`;
	} else {
		return `flex ${directionMap[direction]}`;
	}
};

const includePossibleClasses = () => {
	const classes = [
		"flex flex-row",
		"flex flex-col",
		"flex flex-row-reverse",
		"flex flex-col-reverse",
		"lg:flex-row",
		"lg:flex-col",
		"lg:flex-row-reverse",
		"lg:flex-col-reverse",
	];
	// This function doesn't need to return anything, it's just to ensure the classes are included 🤯🤯
};
