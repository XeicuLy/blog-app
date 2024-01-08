import ArticleListItem from '@/app/_components/ArticleListItem';
import { Article } from '@/lib/microcms';

type Props = {
  articles: Article[];
};

const ArticleList = ({ articles }: Props) => {
  if (!articles) return null;
  if (articles.length === 0) return <p>記事がありません。</p>;

  return (
    <ul>
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ul>
  );
};

export default ArticleList;
