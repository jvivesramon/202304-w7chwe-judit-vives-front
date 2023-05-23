import styled from "styled-components";

const userCardStyled = styled.article`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 280px;
  min-height: 380px;
  background-color: #181818;
  border-radius: 10px;
  box-shadow: 0px 0px 20px #94dd2e;

  .card-title {
    padding: 5px;
    text-align: center;
    font-size: 22px;
    color: #6940e3;
    box-shadow: 0px 0px 20px #000000;
  }

  .icon-container {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }

  .friend-button,
  .enemie-button {
    padding: 3px;
  }
`;

export default userCardStyled;
