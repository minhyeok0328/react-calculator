import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CalculatorTitle } from '../index';

describe('CalculatorTitle component test', () => {
	it('컴포넌트에 텍스트가 잘 삽입된다', () => {
		render(<CalculatorTitle>안녕</CalculatorTitle>);
		expect(screen.getByText('안녕')).toBeDefined();
	});
});