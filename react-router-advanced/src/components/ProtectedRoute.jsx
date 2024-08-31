import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function ProtectedRoute() {
  const { isAuthenticated } = useAuth(); // Use the useAuth hook

  // If the user is not authenticated, redirect to the home page or a login page
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // If the user is authenticated, render the requested route
  return <Outlet />;
}

export default ProtectedRoute;
