import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const INITIAL_STATE: FormInterface = {
  ssn: null,
  phone: null,
  email: null,
  country: null,
};

interface FormInterface {
  ssn: number | null,
  phone: string | null,
  email: string | null,
  country: string | null,
}

type ActionType = {
  type: string,
  payload: FormInterface
}

const form = (state = INITIAL_STATE, action: ActionType): any => {
  console.log('STATE',state);
  switch (action.type) {
    case 'SAVE_FORM':
      return action.payload;
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
