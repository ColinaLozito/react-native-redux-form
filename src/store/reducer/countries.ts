import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const INITIAL_STATE = {};

type ActionType = {
    type: string,
    payload: {
      value: any
    }
  }

const countries = (_state = INITIAL_STATE, action: ActionType): any => {
    switch (action.type) {
      case 'SAVE_COUNTRIES':
        return action.payload.value;
      default:
        return INITIAL_STATE;
    }
  };

  const persistConfig = {
    key: 'countries',
    storage: storage,
  };

  export default persistReducer(persistConfig, countries);
