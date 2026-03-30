import { useEffect, useState } from 'react';
import type { User } from './types/User';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? error.messsage : 'An error occured');
        console.error('Error while fetching users:', err)
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);
  if (loading) {
    return <div className = "loading">loading users...</div>
  }
  if (error) {
    return <div className="error">Error: {error}</div>
  }
  
  return (
    <section className='app'>
      <h1>Users from the API</h1>
      <div className='users-grid'>
        {users.map((user) => (
          <div key={user.id} className='user-card'>
            <h2>{user.name}</h2>
            <p><strong>Username:</strong>@{user.username}</p>
            <p><strong>Email:</strong>{user.email}</p>
            {user.phone && <p><strong>Phone:</strong>{user.phone}</p>}
            {user.website && <p><strong>Website:</strong>{user.website}</p>}
            {user.company && <p><strong>Company:</strong>{user.company.name}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
export default App;



