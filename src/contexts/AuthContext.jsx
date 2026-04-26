import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
        setIsAuth(true);
      } catch (e) {
        console.error('Ошибка парсинга данных пользователя:', e);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (loginValue, password) => {
    const data = await authAPI.login(loginValue, password);
    if (data.user) {
      const userData = {
        id: data.user.id,
        name: data.user.name,
        login: data.user.login,
      };
      setUser(userData);
      setIsAuth(true);
    }
    return data;
  }, []);

  const register = useCallback(async (loginValue, name, password) => {
    const data = await authAPI.register(loginValue, name, password);
    if (data.user) {
      const userData = {
        id: data.user.id,
        name: data.user.name,
        login: data.user.login,
      };
      setUser(userData);
      setIsAuth(true);
    }
    return data;
  }, []);

  const logout = useCallback(() => {
    authAPI.logout();
    setUser(null);
    setIsAuth(false);
  }, []);

  const value = {
    user,
    isAuth,
    isLoading,
    login,
    register,
    logout,
    setIsAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
};

export default AuthContext;