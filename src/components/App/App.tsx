import Header from "../Header/Header";
import LoginForm from "../LoginForm/LoginForm";

const App = (): JSX.Element => {
  return (
    <div className="main-container">
      <Header />
      <LoginForm />
    </div>
  );
};

export default App;
