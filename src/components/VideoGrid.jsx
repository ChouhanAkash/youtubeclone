import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPopular } from '../features/videos/videosSlice'
import VideoCard from './VideoCard'

export default function VideoGrid(){
  const dispatch = useDispatch()
  const { items, status, error } = useSelector(s => s.videos)

  useEffect(() => { if(status === 'idle') dispatch(loadPopular()) }, [status, dispatch])

  if(status === 'loading') return <p className="p-6">Loading popular videos…</p>
  if(status === 'failed') return <p className="p-6 text-red-600">{error}</p>

  return (
    <div className="grid gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map(v => <VideoCard key={(v.id?.videoId)||v.id} v={v} />)}
    </div>
  )
}
