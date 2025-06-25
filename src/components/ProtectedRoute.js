import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authService } from '../services';

const ProtectedRoute = ({ allowedRoles = [] }) => {
  const isAuthenticated = authService.isAuthenticated();
  const user = authService.getCurrentUser();

  if (!isAuthenticated) {
    // Not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && user) {
    // Check if user has the required role
    if (!allowedRoles.includes(user.role)) {
      // User doesn't have permission, redirect to their dashboard
      return <Navigate to={`/${user.role}/dashboard`} replace />;
    }
  }

  // User is authenticated and authorized, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
