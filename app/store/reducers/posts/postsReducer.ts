import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostType } from '../../../types/clientApiTypes';
import { PostsThunks } from './postsThunks';

export interface PostsSliceType {
  posts: PostType[]
  isLoaded: boolean
}

const initialState: PostsSliceType = {
  posts: [],
  isLoaded: false
}

export const PostsReducer = createSlice({
  name: 'PostsReducer',
  initialState,
  reducers: {
    setIsLoaded (state, action: PayloadAction<boolean>) {
      state.isLoaded = action.payload
    },
    setPosts (state, action: PayloadAction<PostType[]>) {
      state.posts = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(PostsThunks.getPosts.fulfilled, ( state, action ) => {
      if (action.payload !== 'not ok') {
        state.isLoaded = true
        state.posts = action.payload.data ? action.payload.data.map(post => ({
          id: post._id,
          title: post.title,
          description: post.description
        })) : []
      }
    })
    builder.addCase(PostsThunks.getPosts.pending, (state) => {
      state.isLoaded = false,
      state.posts = []
    })
    builder.addCase(PostsThunks.addPost.fulfilled, ( state, action ) => {
      if (action.payload !== 'not ok') {
        state.isLoaded = true
        state.posts = action.payload.data ? action.payload.data.map(post => ({
          id: post._id,
          title: post.title,
          description: post.description
        })) : []
      }
    })
    builder.addCase(PostsThunks.addPost.pending, (state) => {
      state.isLoaded = false,
      state.posts = []
    })
    builder.addCase(PostsThunks.deletePost.fulfilled, ( state, action ) => {
      if (action.payload !== 'not ok') {
        state.isLoaded = true
        state.posts = action.payload.data ? action.payload.data.map(post => ({
          id: post._id,
          title: post.title,
          description: post.description
        })) : []
      }
    })
    builder.addCase(PostsThunks.deletePost.pending, (state) => {
      state.isLoaded = false,
      state.posts = []
    })
    builder.addCase(PostsThunks.updatePost.fulfilled, ( state, action ) => {
      if (action.payload !== 'not ok') {
        state.isLoaded = true
        state.posts = action.payload.data ? action.payload.data.map(post => ({
          id: post._id,
          title: post.title,
          description: post.description
        })) : []
      }
    })
    builder.addCase(PostsThunks.updatePost.pending, (state) => {
      state.isLoaded = false,
      state.posts = []
    })
  },
})

export default PostsReducer.reducer