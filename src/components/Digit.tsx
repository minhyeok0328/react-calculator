interface Props {
	digit: string;
	onClick?: (digit: string) => void;
}

export default function Digit({ digit, onClick }: Props) {
	const handlerOnClick = () => {
		onClick?.(digit);
	};

	return (
		<button
			data-testid="digit"
			className="digit"
			type="button"
			onClick={handlerOnClick}
		>{digit}</button>
	);
}