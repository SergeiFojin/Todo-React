export type Todo = {
  _id: string;
  value: string;
  isCompleted: boolean;
}

export enum TodoFilterEnum {
  ALL = 'All',
  COMPLETED = 'Completed',
  NOTCOMPLETED = 'NotCompleted',
}

export type languagesType = {
  en: {nativeName: string};
  ru: {nativeName: string};
  [lng: string]: {nativeName: string};
}

export enum FetchStatusEnum {
  LOADING = 'LOADING',
  ADDLOADING = 'ADDLOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}
