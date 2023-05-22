import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin: 10px;
  gap: 30px;

  .form-container__input {
    min-width: 200px;
    max-width: 600px;
    padding: 20px;
    border: none;
    border-radius: 5px;
    font-family: inherit;
    font-size: ${(prop) => prop.theme.fontSizes.medium};
    background: linear-gradient(
        350deg,
        rgba(72, 121, 37, 0.8),
        rgba(255, 0, 0, 0) 70.71%
      ),
      linear-gradient(182deg, rgb(95 172 29 / 80%), rgba(0, 255, 0, 0) 70.71%),
      linear-gradient(336deg, rgba(23, 23, 37, 0.8), rgba(0, 0, 255, 0) 70.71%);
    ::placeholder {
      color: #e8e8e8;
    }
    color: #ffffff;
  }

  .form-container__button {
    min-width: 200px;
    max-width: 600px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
    font-size: ${(prop) => prop.theme.fontSizes.regular};
    font-family: inherit;
    background: linear-gradient(
      182deg,
      rgb(130 214 32),
      rgb(105 189 48 / 62%) 70.71%
    );
    box-shadow: 0px 0px 20px black;
    color: #ffffff;
    border: none;
    border-radius: 5px;
  }
`;

export default LoginFormStyled;
