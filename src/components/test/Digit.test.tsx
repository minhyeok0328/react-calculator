import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Digit } from '../index';

describe('Digit component test', () => {
	it('props 로 넘긴 callback 함수가 잘 실행된다', () => {
		const fn = vi.fn();
		const { getByTestId } = render(<Digit digit="5" onClick={fn}/>);

		fireEvent.click(getByTestId('digit'));

		expect(fn).toHaveBeenCalled();
	});

	it('화면에 숫자가 잘 그려진다', () => {
		render(<Digit digit="5"/>);
		expect(screen.getAllByText('5')).toBeDefined();
	});
});