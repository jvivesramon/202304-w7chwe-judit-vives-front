import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled className="main-container" aria-label="layout-container">
      <Header />
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
