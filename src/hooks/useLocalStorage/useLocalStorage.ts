const useLocalStorage = () => {
  const setToken = (key: string, token: string) => {
    localStorage.setItem(key, token);
  };

  const getToken = (key: string) => {
    return localStorage.getItem(key);
  };

  const removeToken = (key: string) => {
    localStorage.removeToken(key);
  };

  return { setToken, getToken, removeToken };
};

export default useLocalStorage;
