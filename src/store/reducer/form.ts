import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const INITIAL_STATE = {};

interface FormInterface {
  ssn: string,
  phone: string,
  email: string,
  country: string,
}

type ActionType = {
  type: string,
  payload: {
    value:FormInterface
  }
}

const form = (_state = INITIAL_STATE, action: ActionType): any => {
  switch (action.type) {
    case 'SAVE_FORM':
      return action.payload.value;
    case 'EREASE_FORM':
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
};

const persistConfig = {
  key: 'form',
  storage: storage,
};

export default persistReducer(persistConfig, form);
