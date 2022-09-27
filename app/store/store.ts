import { reviewsApi } from './reducers/reviews/reviewsQuery';
import PostsReducer from './reducers/posts/postsReducer';
import ProfileReducer from './reducers/profile/profileReducer';
import AuthReducer from './reducers/auth/authReducer';
import AlertReducer from './reducers/alerts/alertsReducer';
import ProductsReducer from './reducers/products/productsReducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Context, createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  PostsReducer,
  AuthReducer,
  ProfileReducer,
  ProductsReducer,
  AlertReducer,
  [reviewsApi.reducerPath]: reviewsApi.reducer
})

export const makeStore = (context: Context) => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reviewsApi.middleware)
})

type Store = ReturnType<typeof makeStore>

export type AppDispatch = Store['dispatch']
export type RootState = ReturnType<Store['getState']>

export const wrapper = createWrapper(makeStore)