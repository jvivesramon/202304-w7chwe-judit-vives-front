import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import useUser from "../../hooks/useUser";

const LoginForm = (): JSX.Element => {
  const initialState = { username: "", password: "" };
  const [loginData, setLoginData] = useState(initialState);

  const { getUserToken } = useUser();

  const onChangeRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  const isValidForm = loginData.username !== "" && loginData.password !== "";

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoginData(initialState);

    await getUserToken(loginData);
  };

  return (
    <LoginFormStyled
      autoComplete="off"
      onSubmit={handleSubmit}
      className="form-container"
    >
      <input
        placeholder="username:"
        className="form-container__input"
        type="text"
        id="username"
        value={loginData.username}
        onChange={onChangeRegister}
      />
      <input
        placeholder="password:"
        type="password"
        className="form-container__input"
        value={loginData.password}
        id="password"
        onChange={onChangeRegister}
      />
      <button className="form-container__button" disabled={!isValidForm}>
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
