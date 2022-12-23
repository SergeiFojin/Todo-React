import { FetchAction, FetchActionsEnum } from './fetchActions';
import { FetchStatusEnum } from '../../types/types';

type stateType = {
  status: string;
}

const initialState: stateType = {
  status: FetchStatusEnum.SUCCESS,
};

const fetchReducer = (state = initialState, action: FetchAction): stateType => {
  switch (action.type) {
    case FetchActionsEnum.LOADING_FETCH:
      return { status: FetchStatusEnum.LOADING };

    case FetchActionsEnum.ADD_LOADING_FETCH:
      return { status: FetchStatusEnum.ADDLOADING };

    case FetchActionsEnum.ERROR_FETCH:
      console.log(action.payload);
      return { status: FetchStatusEnum.ERROR };

    case FetchActionsEnum.SUCCESS_FETCH:
      return { status: FetchStatusEnum.SUCCESS };

    default:
      return state;
  }
};

export default fetchReducer;
