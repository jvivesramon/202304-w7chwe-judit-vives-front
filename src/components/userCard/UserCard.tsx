import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  name: string;
}

const UserCard = ({ name }: UserCardProps): JSX.Element => {
  return (
    <UserCardStyled>
      <img
        src="https://cdn.discordapp.com/attachments/1094550845909114921/1110448188038578206/avatar.png"
        alt=""
        width=""
        height=""
      />
      <h3 className="card-title">{name}</h3>
      <div className="icon-container">
        <button className="friend-button">
          <img
            className="friend-button"
            src="https://cdn.discordapp.com/attachments/1094550845909114921/1110448187463958558/friend.png"
            alt="friend icon"
            width="50"
            height="50"
          />
        </button>
        <button className="enemie-button">
          <img
            className="enemie-button"
            src="https://cdn.discordapp.com/attachments/1094550845909114921/1110448187744989244/enemie.png"
            alt="enemie icon"
            width="48"
            height="55"
          />
        </button>
      </div>
    </UserCardStyled>
  );
};

export default UserCard;
