import Sidebar from '../components/Sidebar'
import VideoGrid from '../components/VideoGrid'

export default function Home(){
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <VideoGrid />
      </main>
    </div>
  )
}
