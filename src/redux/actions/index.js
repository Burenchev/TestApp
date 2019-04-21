import { CHANGE_YEAR } from '../constants/action-types';
import { CHANGE_REPRESENT} from '../constants/action-types';

export function changeYear(payload) {
    return {type: CHANGE_YEAR, payload};
}

export function changeRepresent(payload) {
    return {type: CHANGE_REPRESENT, payload};
}