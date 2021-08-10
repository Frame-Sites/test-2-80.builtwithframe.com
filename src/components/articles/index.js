import ArticleItem from '../articleItem';
import styles from './styles.module.scss';

const Article = ({ articles }) => (
  <div id="ArticleSection" className={styles.articlePageWrapper}>
    <h2 className={styles.headingArticle}>Articles</h2>
    {!!articles.length && (
      <div className={styles.articleContentGrid}>
        {articles.map(article => (
          <ArticleItem {...article} key={article.id} />
        ))}
      </div>
    )}
  </div>
);

export default Article;
