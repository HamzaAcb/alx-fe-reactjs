import { useQuery } from 'react-query';
import axios from 'axios';

function fetchPosts() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}

function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Data</button>
      <ul>
        {data.data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
