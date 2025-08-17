import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchVideoById } from '../../services/youtube'

export const loadVideo = createAsyncThunk('currentVideo/load', async (id) => {
  return await fetchVideoById(id)
})

const currentVideoSlice = createSlice({
  name: 'currentVideo',
  initialState: { item: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadVideo.pending, (s) => { s.status = 'loading' })
      .addCase(loadVideo.fulfilled, (s, { payload }) => { s.status = 'succeeded'; s.item = payload })
      .addCase(loadVideo.rejected, (s, a) => { s.status = 'failed'; s.error = a.error.message })
  }
})

export default currentVideoSlice.reducer
