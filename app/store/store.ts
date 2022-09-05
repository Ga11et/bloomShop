import PostsReducer from './reducers/posts/postsReducer';
import MainReducer from './reducers/mainReducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Context, createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  MainReducer,
  PostsReducer
})

export const makeStore = (context: Context) => configureStore({
  reducer: rootReducer
})

type Store = ReturnType<typeof makeStore>

export type AppDispatch = Store['dispatch']
export type RootState = ReturnType<Store['getState']>

export const wrapper = createWrapper(makeStore)