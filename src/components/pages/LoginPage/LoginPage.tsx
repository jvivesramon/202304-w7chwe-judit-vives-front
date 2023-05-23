import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../../hooks/useToken/useToken";
import useUser from "../../../hooks/useUser/useUser";
import { useAppDispatch } from "../../../store";
import { loginUserActionCreator } from "../../../store/user/userSlice";
import { UserDataCredentials } from "../../../types";
import LoginForm from "../../LoginForm/LoginForm";

const LoginPage = (): JSX.Element => {
  const { setToken } = useLocalStorage();
  const dispatch = useAppDispatch();
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const navigate = useNavigate();

  const handleOnSubmit = async (userDataCredentials: UserDataCredentials) => {
    try {
      const token = await getUserToken(userDataCredentials);

      if (token) {
        const userData = getTokenData(token);

        dispatch(loginUserActionCreator(userData));
        setToken("token", token);
        navigate("/contacts", { replace: true });
      }
    } catch {
      return;
    }
  };

  return (
    <>
      <img
        className="header-icon"
        src="/images/ISDEEPWEB.svg"
        alt="Isdeepweb logo"
        width="320"
        height="285.60"
      />
      <h2 className="info-title">Trust the method</h2>
      <LoginForm actionOnClick={handleOnSubmit} />
    </>
  );
};

export default LoginPage;
