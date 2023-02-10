import { describe, expect, it } from 'vitest';
import { Validator } from '../index';

describe('숫자 검증', () => {
	it('3개 이상의 숫자를 계산하려고 하면 안된다', () => {
		const result = Validator.isMaxOperatorLength('999+9999+999');

		expect(result).toBe(true);
	});

	it('4개 이상의 숫자를 입력할 수 없다', () => {
		const result = Validator.isOverMaxDigitLength('9999');

		expect(result).toBe(false);
	});
});