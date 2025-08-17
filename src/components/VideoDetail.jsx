import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadVideo } from '../features/videos/currentVideoSlice'

export default function VideoDetail(){
  const { id } = useParams()
  const dispatch = useDispatch()
  const { item, status } = useSelector(s => s.currentVideo)

  useEffect(() => { if(id) dispatch(loadVideo(id)) }, [id, dispatch])

  if(status==='loading' || !item) return <p className="p-4">Loading video…</p>

  const { snippet, statistics } = item
  const title = snippet.title
  const desc = snippet.description
  const likes = statistics?.likeCount
  const views = statistics?.viewCount

  return (
    <div className="flex-1 p-2">
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <h1 className="mt-3 text-xl font-bold">{title}</h1>
      <div className="text-sm text-gray-600 flex gap-4 mt-1">
        {views && <span>{Number(views).toLocaleString()} views</span>}
        {likes && <span>· {Number(likes).toLocaleString()} likes</span>}
        <span>· {new Date(snippet.publishedAt).toLocaleDateString()}</span>
      </div>
      <pre className="whitespace-pre-wrap mt-3 p-3 bg-gray-50 rounded border text-sm">{desc}</pre>
    </div>
  )
}
