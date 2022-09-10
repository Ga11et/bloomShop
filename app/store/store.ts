import PostsReducer from './reducers/posts/postsReducer';
import ProfileReducer from './reducers/profile/profileReducer';
import AuthReducer from './reducers/auth/authReducer';
import ProductsReducer from './reducers/products/productsReducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Context, createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  PostsReducer,
  AuthReducer,
  ProfileReducer,
  ProductsReducer
})

export const makeStore = (context: Context) => configureStore({
  reducer: rootReducer
})

type Store = ReturnType<typeof makeStore>

export type AppDispatch = Store['dispatch']
export type RootState = ReturnType<Store['getState']>

export const wrapper = createWrapper(makeStore)