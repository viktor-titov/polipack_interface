/* eslint-disable react/prop-types */
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';
import s from './LoginPage.module.scss';
import { useEffect, useState } from 'react';
import { handleAuth } from '../../services/APIrequests';
import Cookies from 'js-cookie';
import { Loader } from '../../components/Loader/Loader';

export const LoginPage = ({ user, setUser, setAuth }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      username: e.target.value,
    }));
    setError(null);
  };

  const handlePasswordChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      password: e.target.value,
    }));
    setError(null);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await handleAuth(user);
      if (result) {
        Cookies.set('authToken', result.token, { expires: 2 });
        setAuth(result.token)
        navigate('/');
      } else {
        setError('Не удалось войти. Проверьте логин и пароль.');
      }
    } catch (err) {
      setError(
        'Произошла непредвиденная ошибка. Пожалуйста, попробуйте снова.'
      );
      console.log('Ошибка!', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user.username !== '' && user.password !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [user.username, user.password]);

  return (
    <div className={s.wrapper}>
      <div className={s.form}>
        <h1>Войти в систему</h1>
        <Input
          placeholder={'Логин'}
          handleChange={handleLoginChange}
          value={user.username}
        />
        <Input
          type={'password'}
          placeholder={'Пароль'}
          handleChange={handlePasswordChange}
          value={user.password}
        />
        <Button
          name={isLoading ? <Loader /> : 'Вход'}
          handleClick={handleLogin}
          disabled={isButtonDisabled || isLoading}
        />
        {error && <div className={s.error}>{error}</div>}
      </div>
    </div>
  );
};
