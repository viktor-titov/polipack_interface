/* eslint-disable react/prop-types */
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { NotFoundPage } from '../pages/NotFound/NotFound';
import { ProtectedRoute } from './protectedRoutes';
import Cookies from 'js-cookie';

export const AppRoutes = ({ user, setUser, setAuth }) => {
  const token = Cookies.get('authToken');
  const isAuthenticated = Boolean(token);

  return (
    <Routes>
      <Route
        path='/login'
        element={<LoginPage user={user} setUser={setUser} setAuth={setAuth}/>}
      />
      <Route element={<ProtectedRoute isAllowed={Boolean(isAuthenticated)} />}>
        <Route path='/' element={<MainPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
