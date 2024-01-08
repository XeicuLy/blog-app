import ArticleListItem from '@/app/_components/ArticleListItem';
import { Article } from '@/lib/microcms';

type Props = {
  articles: Article[];
};

const ArticleList = ({ articles }: Props) => {
  if (!articles) return null;

  return (
    <ul>
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ul>
  );
};

export default ArticleList;
