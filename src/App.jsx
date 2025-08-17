import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import VideoDetail from './components/VideoDetail'
import SuggestedList from './components/SuggestedList'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PrivateRoute from './components/PrivateRoute'

export default function App(){
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={
          <PrivateRoute>
            <div className="flex max-w-7xl mx-auto gap-4 p-4">
              <VideoDetail />
              <SuggestedList />
            </div>
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}
