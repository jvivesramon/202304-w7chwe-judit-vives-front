import LoginForm from "../../LoginForm/LoginForm";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <img
        className="header-icon"
        src="/images/ISDEEPWEB.svg"
        alt="Isdeepweb logo"
        width="320"
        height="285.60"
      />
      <h2 className="info-title">Once you are in, you will stay forever</h2>
      <LoginForm />
    </>
  );
};

export default LoginPage;
