import React, { useEffect, useState } from 'react';

export default function Library() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const pageSize = 10;

  useEffect(() => {
    fetch(`/api/articles?q=${encodeURIComponent(query)}`)
      .then(response => {
        if (!response.ok) throw new Error('Unable to load articles');
        return response.json();
      })
      .then(setArticles)
      .catch(error => setError(error.message));
  }, [query]);

  const visible = articles.slice(page * pageSize, pageSize);
  return <section>
    <h1>Article library</h1>
    <label>Search <input value={query} onChange={event => setQuery(event.target.value)} /></label>
    {error && <p role="alert">{error}</p>}
    <ul>{visible.map(article => <li key={article.id}>{article.title}</li>)}</ul>
    <button disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button>
    <button disabled={(page + 1) * pageSize >= articles.length} onClick={() => setPage(page + 1)}>Next</button>
  </section>;
}
