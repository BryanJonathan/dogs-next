import { Photo } from '@/actions/photos-get';
import FeedPhotos from './feed-photos';

export default function Feed({ photos }: { photos: Array<Photo> }) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
