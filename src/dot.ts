import { numerator_or_0_sum_ } from '@ctx-core/math'
import { dotMultiply } from './dotMultiply'
export function dot(...matrices:number[][]) {
	return numerator_or_0_sum_(dotMultiply(...matrices))
}
