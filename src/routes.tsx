import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Loading from './components/spinners/loading';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import NotFound from './pages/errors/NotFound';

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));

const Router = () => {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><Dashboard /></Suspense> },
      ],
    },
    {
      path: "/", element: <Navigate to="/auth/login" />
    },
    {
      path: "/auth/login",
      element: <Login />
    },
    {
      path: "/auth/forgot-password",
      element: <ForgotPassword />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);


  return routes;
}


export default Router;