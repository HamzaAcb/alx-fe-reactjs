import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated }) {
  // If the user is not authenticated, redirect to the home page or a login page
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // If the user is authenticated, render the requested route
  return <Outlet />;
}

export default ProtectedRoute;

