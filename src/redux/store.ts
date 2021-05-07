import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';
import { useDispatch } from 'react-redux';
import initReducer from './reducers/init';
import activeForm from './reducers/form';

const store = configureStore({
  reducer: {
    init: initReducer,
    form: activeForm,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types
export default store;