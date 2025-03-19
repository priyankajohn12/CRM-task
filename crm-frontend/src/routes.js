import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from './Layout/Authentication/LoginPage';
import Home from './Layout/Home';

const isAuthenticated = () => {
  const token = JSON.parse(localStorage.getItem('@token'));
  const user = JSON.parse(localStorage.getItem('@entri_user'));

  return token && user;
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/authentication/login" />;
};

// Fallback Route Component
const FallbackRoute = () => {
  return isAuthenticated() ? <Navigate to="/" /> : <Navigate to="/authentication/login" />;
};

const routes = createBrowserRouter([
  {
    path: '/authentication/login',
    element: <LoginPage />,
  },
  //protected route
  {
    path: '/',
    element: <ProtectedRoute element={<Home />} />,
  },
  // fallback routes
  {
    path: '*',
    element: <FallbackRoute />,
  },
]);

export default routes;
