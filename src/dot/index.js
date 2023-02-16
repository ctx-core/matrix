import { numerator_or_0_sum_ } from '@ctx-core/math'
import { mul_dot } from '../mul_dot/index.js'
/**
 * @param matrices{number[][]}
 * @returns {number}
 */
export function dot(...matrices) {
	return numerator_or_0_sum_(mul_dot(...matrices))
}
