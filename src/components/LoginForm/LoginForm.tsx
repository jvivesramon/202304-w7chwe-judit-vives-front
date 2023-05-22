import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserDataCredentials } from "../../types";

interface LoginFormProps {
  actionOnClick: (userData: UserDataCredentials) => void;
}

const LoginForm = ({ actionOnClick }: LoginFormProps): JSX.Element => {
  const initialState = { username: "", password: "" };
  const [loginData, setLoginData] = useState(initialState);

  const onChangeRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  const isValidForm = loginData.username !== "" && loginData.password !== "";

  const handleOnClick = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoginData(initialState);

    actionOnClick(loginData);
  };

  return (
    <LoginFormStyled
      autoComplete="off"
      onSubmit={handleOnClick}
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
