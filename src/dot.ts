import { _numerator_or_0_sum } from '@ctx-core/math'
import { dotMultiply } from './dotMultiply'
export function dot(...matrices:number[][]) {
	return _numerator_or_0_sum(dotMultiply(...matrices))
}
