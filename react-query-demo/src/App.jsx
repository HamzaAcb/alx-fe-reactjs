import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent'; // Import your PostsComponent

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
