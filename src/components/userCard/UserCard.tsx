import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  name: string;
  img: string;
}

const UserCard = ({ name, img }: UserCardProps): JSX.Element => {
  return (
    <UserCardStyled>
      <img src={img} alt="" />
      <h3 className="card-title">{name}</h3>
      <div>
        <button>
          <img src={img} alt="" />
        </button>
        <button>
          <img src={img} alt="" />
        </button>
      </div>
    </UserCardStyled>
  );
};

export default UserCard;
