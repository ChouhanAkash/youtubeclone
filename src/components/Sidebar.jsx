import { Link } from 'react-router-dom'

export default function Sidebar(){
  return (
    <aside className="hidden md:block w-56 border-r min-h-[calc(100vh-56px)] sticky top-14">
      <nav className="p-3 space-y-2">
        <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100">
          <span>🏠</span><span>Home</span>
        </Link>
        <button className="flex items-center gap-3 px-3 py-2 rounded w-full hover:bg-gray-100">
          <span>🔥</span><span>Trending</span>
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded w-full hover:bg-gray-100">
          <span>🎵</span><span>Music</span>
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded w-full hover:bg-gray-100">
          <span>🎮</span><span>Gaming</span>
        </button>
      </nav>
    </aside>
  )
}
