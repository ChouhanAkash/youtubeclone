import axios from 'axios';
import { YT_API_KEY, YT_BASE } from '../config';

const PART_COMMON = 'snippet,contentDetails,statistics';

export async function fetchPopularVideos(regionCode = 'IN', maxResults = 24) {
  const { data } = await axios.get(`${YT_BASE}/videos`, {
    params: {
      key: YT_API_KEY,
      part: PART_COMMON,
      chart: 'mostPopular',
      regionCode,
      maxResults,
    },
  });
  return data.items || [];
}

export async function fetchVideoById(id) {
  const { data } = await axios.get(`${YT_BASE}/videos`, {
    params: { key: YT_API_KEY, part: PART_COMMON, id },
  });
  return data.items?.[0] || null;
}

export async function fetchSuggestedVideos(relatedToId, maxResults = 20) {
  const { data } = await axios.get(`${YT_BASE}/search`, {
    params: {
      key: YT_API_KEY,
      part: 'snippet',
      type: 'video',
      relatedToVideoId: relatedToId,
      maxResults,
    },
  });
  return data.items || [];
}
