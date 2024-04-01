import { Photo } from '@/actions/photos-get';
import Link from 'next/link';
import Image from 'next/image';
import styles from './feed.module.css'

export default function FeedPhotos({ photos }: { photos: Array<Photo> }) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo, i) => (
        <li className={styles.photo} key={photo.id + i}>
          {photo.title}
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              alt={photo.title}
              width={1500}
              height={1500}
              sizes="80vw"
            />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
