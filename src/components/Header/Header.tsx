import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        className="header-icon"
        src="/images/ISDEEPWEB.svg"
        alt="Isdeepweb logo"
        width="320"
        height="285.60"
      />
    </HeaderStyled>
  );
};

export default Header;
