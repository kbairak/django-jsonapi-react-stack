import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { magazineApi } from './api';

const queryClient = new QueryClient()

function App() {
  return <QueryClientProvider client={queryClient}><Main /></QueryClientProvider>;
}

function Main() {
  const { isError, isLoading, data: articles } = useQuery(['articles'], async () => {
    const articles = magazineApi.Article.list();
    await articles.fetch();
    return articles;
  });

  if (isError) {
    return 'Error!!!';
  }

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <ul>
      {articles.data.map((article) => (
        <li key={article.id}>
          <strong>{article.get('title')}</strong>
          {' - '}
          {article.get('content')}
        </li>
      ))}
    </ul>
  );
}

export default App
