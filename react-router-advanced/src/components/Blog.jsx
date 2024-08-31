import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();
  return <div>Viewing blog post {postId}</div>;
}

function Blog() {
  return (
    <Routes>
      <Route path=":postId" element={<BlogPost />} />
    </Routes>
  );
}

export default Blog;
