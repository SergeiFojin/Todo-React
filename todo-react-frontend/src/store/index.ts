import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import todoReducer from './todoReducer/todoReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  todoReducer,
});

export const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  },
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
