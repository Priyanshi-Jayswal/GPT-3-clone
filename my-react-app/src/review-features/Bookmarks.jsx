import React, { useEffect, useState } from 'react';

const articles = [{ id: 'intro', title: 'Getting started' }, { id: 'prompts', title: 'Writing prompts' }];
export default function Bookmarks() {
  const [account, setAccount] = useState('alice');
  const [saved, setSaved] = useState(() => JSON.parse(localStorage.getItem('bookmarks') || '[]'));
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(saved));
  }, [saved]);
  function toggle(id) {
    if (saved.includes(id)) saved.splice(saved.indexOf(id), 1);
    else saved.push(id);
    setSaved(saved);
  }
  return <section>
    <h1>Reading list for {account}</h1>
    <label>Account <select value={account} onChange={e => setAccount(e.target.value)}>
      <option value="alice">Alice</option><option value="bob">Bob</option>
    </select></label>
    <ul>{articles.map(article => <li key={article.id}>
      {article.title} <button onClick={() => toggle(article.id)}>{saved.includes(article.id) ? 'Remove bookmark' : 'Bookmark'}</button>
    </li>)}</ul>
    <p>{saved.length} bookmarks</p>
  </section>;
}
