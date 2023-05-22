import axios from "axios";

interface UserData {
  username: string;
  password: string;
}

const useUser = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getUserToken = async (userData: UserData): Promise<string> => {
    const {
      data: { token },
    } = await axios.post<{ token: string }>(`${apiUrl}/user/login`, userData);
    localStorage.setItem("token", token);
    return token;
  };
  return { getUserToken };
};

export default useUser;
