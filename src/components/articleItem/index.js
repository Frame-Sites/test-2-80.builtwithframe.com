import Image from 'next/image';
import createImageUrl from '../../utils/createImageUrl';
import styles from '../articles/styles.module.scss';

const ArticleItem = props => {
  const { title, caption, imageUrl, url } = props;
  const imageurl = createImageUrl(imageUrl);
  return (
    <a
      href={url}
      rel="noreferrer"
      target="_blank"
      style={{ textDecoration: 'none', color: 'black' }}
      className={styles.articleItem}
    >
      <div className={styles.articleContentWrapper} style={{ cursor: 'pointer' }}>
        <Image quality="100" src={imageurl} height="261" width="261" alt="article" />
        <div className={styles.articleContent}>
          <p className={styles.title}>{title}</p>
          <p className={styles.caption}>{caption}</p>
          <p><strong>Read More</strong></p>
        </div>
      </div>
    </a>
  );
};

export default ArticleItem;
