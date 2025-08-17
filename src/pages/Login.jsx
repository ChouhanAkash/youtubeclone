import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { FIREBASE_CONFIG } from '../config'
import { Link, useNavigate } from 'react-router-dom'

const app = initializeApp(FIREBASE_CONFIG)
const auth = getAuth(app)

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(s => s.auth.user)

  useEffect(() => onAuthStateChanged(auth, u => { if(u){ dispatch(setUser({ email: u.email, uid: u.uid })); navigate('/') } }), [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      dispatch(setUser({ email: res.user.email, uid: res.user.uid }))
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  if(user) return null

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border rounded px-3 py-2"/>
        <input value={password} type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full border rounded px-3 py-2"/>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button className="w-full bg-red-600 text-white rounded px-3 py-2">Login</button>
      </form>
      <p className="mt-3 text-sm">No account? <Link to="/signup" className="text-blue-600">Sign up</Link></p>
    </div>
  )
}
