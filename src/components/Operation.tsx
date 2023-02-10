interface Props {
	operator: string;
	onClick?: (operation: string) => void;
}

export default function Operation({ operator, onClick }: Props) {
	const handlerOnClick = () => {
		onClick?.(operator);
	};

	return (
		<button
			data-testid="operation"
			className="operation"
			onClick={handlerOnClick}
		>{operator}</button>
	);
}