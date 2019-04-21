import { CHANGE_YEAR } from '../constants/action-types';
import { CHANGE_REPRESENT} from '../constants/action-types';

const initialState = {
    year: '2016',
    represent: 'Goods'
  };

  function rootReducer(state = initialState, action) {
    if (action.type === CHANGE_YEAR) {
      return Object.assign({}, state, {
        year: action.payload
      });
    }
    if (action.type === CHANGE_REPRESENT) {
      return Object.assign({}, state, {
        represent: action.payload
      });
    }
    return state;
  };
  
  export default rootReducer;