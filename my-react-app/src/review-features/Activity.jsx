import React, { useEffect, useState } from 'react';

export default function Activity() {
  const [workspace, setWorkspace] = useState('demo');
  const [events, setEvents] = useState([]);
  const [refreshCount, setRefreshCount] = useState(0);
  const [error, setError] = useState('');
  useEffect(() => {
    async function refresh() {
      try {
        const response = await fetch(`/api/workspaces/${encodeURIComponent(workspace)}/activity`);
        if (!response.ok) throw new Error('Refresh failed');
        const data = await response.json();
        setEvents(data);
        setRefreshCount(refreshCount + 1);
        setError('');
      } catch (error) {
        setError(error.message);
      }
    }
    refresh();
    const timer = setInterval(refresh, 5000);
    window.addEventListener('online', refresh);
    return () => clearInterval(timer);
  }, []);
  return <section>
    <h1>Workspace activity</h1>
    <label>Workspace <select value={workspace} onChange={e => setWorkspace(e.target.value)}>
      <option value="demo">Demo</option><option value="team">Team</option>
    </select></label>
    <p>{refreshCount} successful refreshes</p>
    {error && <p role="alert">{error}</p>}
    <ul>{events.map(event => <li key={event.id}>{event.message}</li>)}</ul>
  </section>;
}
