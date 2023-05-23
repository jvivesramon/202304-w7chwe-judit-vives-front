import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  name: string;
}

const UserCard = ({ name }: UserCardProps): JSX.Element => {
  return (
    <UserCardStyled>
      <img src="../../../public/images/avatar.svg" alt="" width="" height="" />
      <h3 className="card-title">{name}</h3>
      <div className="icon-container">
        <button className="friend-button">
          <img
            className="friend-button"
            src="../../../public/images/friend.svg"
            alt="friend icon"
            width="50"
            height="50"
          />
        </button>
        <button className="enemie-button">
          <img
            className="enemie-button"
            src="../../../public/images/enemie.svg"
            alt="enemie icon"
            width="55"
            height="55"
          />
        </button>
      </div>
    </UserCardStyled>
  );
};

export default UserCard;
