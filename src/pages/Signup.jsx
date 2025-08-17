import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { FIREBASE_CONFIG } from '../config'
import { useNavigate, Link } from 'react-router-dom'

const app = initializeApp(FIREBASE_CONFIG)
const auth = getAuth(app)

export default function Signup(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      dispatch(setUser({ email: res.user.email, uid: res.user.uid }))
      navigate('/')
    } catch (err) { setError(err.message) }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Sign up</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border rounded px-3 py-2"/>
        <input value={password} type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full border rounded px-3 py-2"/>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button className="w-full bg-red-600 text-white rounded px-3 py-2">Create account</button>
      </form>
      <p className="mt-3 text-sm">Have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
    </div>
  )
}
