import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const initialState = { username: "", password: "" };
  const [login, setLogin] = useState(initialState);

  const onChangeRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [event.target.id]: event.target.value,
    });
  };

  const isValidForm = login.username !== "" && login.password !== "";

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLogin(initialState);
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
        value={login.username}
        onChange={onChangeRegister}
      />
      <input
        placeholder="password:"
        type="password"
        className="form-container__input"
        value={login.password}
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
