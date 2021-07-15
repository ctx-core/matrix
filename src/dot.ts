import { numerator_or_0_sum_ } from '@ctx-core/math'
import { dotMultiply } from './dotMultiply.js'
export function dot(...matrices:number[][]) {
	return numerator_or_0_sum_(dotMultiply(...matrices))
}
