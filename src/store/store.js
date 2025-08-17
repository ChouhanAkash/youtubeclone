import { configureStore } from '@reduxjs/toolkit'
import videosReducer from '../features/videos/videosSlice'
import currentVideoReducer from '../features/videos/currentVideoSlice'
import suggestionsReducer from '../features/videos/suggestionsSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    currentVideo: currentVideoReducer,
    suggestions: suggestionsReducer,
    auth: authReducer,
  },
})
