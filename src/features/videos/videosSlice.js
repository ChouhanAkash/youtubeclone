import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPopularVideos } from '../../services/youtube'

export const loadPopular = createAsyncThunk('videos/loadPopular', async () => {
  return await fetchPopularVideos()
})

const videosSlice = createSlice({
  name: 'videos',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPopular.pending, (s) => { s.status = 'loading' })
      .addCase(loadPopular.fulfilled, (s, { payload }) => { s.status = 'succeeded'; s.items = payload })
      .addCase(loadPopular.rejected, (s, a) => { s.status = 'failed'; s.error = a.error.message })
  }
})

export default videosSlice.reducer
