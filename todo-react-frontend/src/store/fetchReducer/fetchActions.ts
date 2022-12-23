export enum FetchActionsEnum {
  LOADING_FETCH = 'LOADING_FETCH',
  ADD_LOADING_FETCH = 'ADD_LOADING_FETCH',
  ERROR_FETCH = 'ERROR_FETCH',
  SUCCESS_FETCH = 'SUCCESS_FETCH',
}

type LoadingFetchAction = {
  type: FetchActionsEnum.LOADING_FETCH;
}

type AddLoadingFetchAction = {
  type: FetchActionsEnum.ADD_LOADING_FETCH;
}

type ErrorFetchAction = {
  type: FetchActionsEnum.ERROR_FETCH;
  payload: string;
}

type SuccessFetchAction = {
  type: FetchActionsEnum.SUCCESS_FETCH;
}

export type FetchAction =
  LoadingFetchAction |
  AddLoadingFetchAction |
  ErrorFetchAction |
  SuccessFetchAction
