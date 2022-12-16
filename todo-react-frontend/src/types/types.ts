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
