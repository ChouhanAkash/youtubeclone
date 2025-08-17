import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'

export default function Header(){
  const { user } = useSelector(s => s.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-10 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
          <Link to="/" className="flex items-center gap-1">
            <div className="w-6 h-6 bg-red-600" />
            <span className="font-bold text-lg">YouTube</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center flex-1 mx-6">
          <input className="w-full border rounded-l-full px-4 py-1 h-9 focus:outline-none" placeholder="Search"/>
          <button className="border rounded-r-full px-4 h-9">Search</button>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm">Hi, {user.email}</span>
              <button onClick={() => { dispatch(logout()); navigate('/login') }} className="px-3 py-1 border rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1 border rounded">Login</Link>
              <Link to="/signup" className="px-3 py-1 border rounded">Signup</Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
