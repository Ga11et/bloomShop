import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteAPI } from '../../../api/deleteAPI';
import { fetchAPI } from '../../../api/fetchAPI';
import { updateAPI } from '../../../api/updateAPI';
import { PostType } from '../../../types/clientApiTypes';

export const PostsThunks = {
  getPosts: createAsyncThunk(
    'getPosts',
    async () => {
      const posts = await fetchAPI.posts()
      return posts
    }
  ),
  deletePost: createAsyncThunk(
    'deletePost',
    async (post: PostType) => {
      const response = await deleteAPI.post(post.id)
      return response
    }
  ),
  updatePost: createAsyncThunk(
    'updatePost',
    async (post: PostType) => {
      const response = await updateAPI.post(post)
      return response
    }
  )
}