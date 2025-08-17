import { Link } from 'react-router-dom'

export default function VideoCard({ v }){
  const id = v.id?.videoId || v.id
  const { title, thumbnails, channelTitle, publishedAt } = v.snippet
  const views = v.statistics?.viewCount
  const likes = v.statistics?.likeCount
  const thumb = thumbnails?.medium?.url || thumbnails?.high?.url

  return (
    <Link to={`/watch/${id}`} className="block">
      <div className="group">
        <img src={thumb} alt={title} className="w-full aspect-video object-cover rounded-xl"/>
        <div className="mt-2 flex gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div className="flex-1">
            <h3 className="font-semibold line-clamp-2 group-hover:underline">{title}</h3>
            <p className="text-sm text-gray-500">{channelTitle}</p>
            <p className="text-xs text-gray-500 flex gap-2">
              {views && <span>{Number(views).toLocaleString()} views</span>}
              {likes && <span>· {Number(likes).toLocaleString()} likes</span>}
              <span>· {new Date(publishedAt).toLocaleDateString()}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
