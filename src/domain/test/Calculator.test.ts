import { describe, expect, it } from 'vitest';
import { Calculator } from '../index';

describe('계산기', () => {
	it('두 가지 숫자와 연산자를 넣으면 연산자에 맞는 계산 후 값을 넘겨준다', () => {
		const [a, b] = [5, 10];
		const operator = '+';

		const calculator = new Calculator(operator, [a, b]);
		const result = calculator.execute();

		expect(result).toBe(15);
	});
});