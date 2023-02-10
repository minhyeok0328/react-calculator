import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Operation } from '../index';

describe('Operation component test', () => {
	it('props 로 넘긴 callback 함수가 잘 실행된다', () => {
		const fn = vi.fn();
		const { getByTestId } = render(<Operation operator="+" onClick={fn}/>);

		fireEvent.click(getByTestId('operation'));

		expect(fn).toHaveBeenCalled();
	});

	it('화면에 숫자가 잘 그려진다', () => {
		render(<Operation operator="+"/>);
		expect(screen.getAllByText('+')).toBeDefined();
	});
});