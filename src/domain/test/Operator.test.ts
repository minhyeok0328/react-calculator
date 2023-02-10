import { describe, expect, it } from 'vitest';
import { Operator } from '../index';

describe('계산 클래스', () => {
	it('더하기 (+)', () => {
		const result = Operator.calculate('+', [5, 5]);

		expect(result).toBe(10);
	});

	it('빼기 (-)', () => {
		const result = Operator.calculate('-', [5, 5]);

		expect(result).toBe(0);
	});

	it('곱하기 (X)', () => {
		const result = Operator.calculate('X', [5, 5]);

		expect(result).toBe(25);
	});

	it('나누기 (/)', () => {
		const result = Operator.calculate('/', [5, 5]);

		expect(result).toBe(1);
	});

	it('나누기 이후 결과값은 소수점을 버린다 (Math.round)', () => {
		const result = Operator.calculate('/', [99, 17]);

		expect(result).toBe(6);
	});
});