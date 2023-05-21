import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        className="header-icon"
        src="/images/ISDEEPWEB.svg"
        alt="r2d2 icon"
        width="320"
        height="285.60"
      />
    </HeaderStyled>
  );
};

export default Header;
