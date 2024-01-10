import ArticleListItem from '@/app/_components/ArticleListItem';
import { Article } from '@/lib/microcms';

type Props = {
  articles: Article[];
};

const ArticleList = ({ articles }: Props) => {
  if (!articles) return null;
  if (articles.length === 0) {
    return (
      <p className='text-center text-xl font-bold'>
        記事がありません。
        <br />
        他の単語で検索してください。
      </p>
    );
  }

  return (
    <ul className='flex flex-col justify-center gap-4'>
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ul>
  );
};

export default ArticleList;
