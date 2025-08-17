import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchSuggestedVideos } from '../../services/youtube'

export const loadSuggestions = createAsyncThunk('suggestions/load', async (id) => {
  return await fetchSuggestedVideos(id)
})

const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSuggestions.pending, (s) => { s.status = 'loading' })
      .addCase(loadSuggestions.fulfilled, (s, { payload }) => { s.status = 'succeeded'; s.items = payload })
      .addCase(loadSuggestions.rejected, (s, a) => { s.status = 'failed'; s.error = a.error.message })
  }
})

export default suggestionsSlice.reducer
