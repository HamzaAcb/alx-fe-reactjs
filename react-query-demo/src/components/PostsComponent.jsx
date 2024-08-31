import { useQuery } from 'react-query';
import axios from 'axios';

// Function to fetch posts
function fetchPosts() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}

function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching
  } = useQuery(
    'posts', 
    fetchPosts, 
    {
      // Configuration options
      cacheTime: 5 * 60 * 1000, // 5 minutes
      staleTime: 1 * 60 * 1000,  // 1 minute
      refetchOnWindowFocus: true, // Refetch data when window gains focus
      keepPreviousData: true,     // Keep previous data while new data is loading
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>Refetch Data</button>
      <ul>
        {data.data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;


