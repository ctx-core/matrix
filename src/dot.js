import { numerator_or_0_sum_ } from '@ctx-core/math';
import { dotMultiply } from './dotMultiply';
export function dot(...matrices) {
    return numerator_or_0_sum_(dotMultiply(...matrices));
}
//# sourceMappingURL=src/dot.js.map