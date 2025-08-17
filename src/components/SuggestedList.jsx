import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadSuggestions } from '../features/videos/suggestionsSlice'
import { Link, useParams } from 'react-router-dom'

export default function SuggestedList(){
  const { id } = useParams()
  const dispatch = useDispatch()
  const { items, status } = useSelector(s => s.suggestions)

  useEffect(() => { if(id) dispatch(loadSuggestions(id)) }, [id, dispatch])

  return (
    <aside className="w-full lg:w-96 space-y-4 p-2">
      {status==='loading' && <p>Loading suggestions…</p>}
      {items.map(item => {
        const vid = item.id.videoId
        const sn = item.snippet
        return (
          <Link key={vid} to={`/watch/${vid}`} className="flex gap-3">
            <img src={sn.thumbnails.medium.url} className="w-48 h-28 object-cover rounded"/>
            <div>
              <h4 className="font-semibold line-clamp-2">{sn.title}</h4>
              <p className="text-sm text-gray-500">{sn.channelTitle}</p>
              <p className="text-xs text-gray-500">{new Date(sn.publishedAt).toLocaleDateString()}</p>
            </div>
          </Link>
        )
      })}
    </aside>
  )
}
