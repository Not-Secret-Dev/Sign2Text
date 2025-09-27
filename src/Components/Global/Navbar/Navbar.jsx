import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoLanguageSharp } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

const MainContainer = styled.nav`
  height: 11vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fafc;
`;

const Navlinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #0d171c;
    font-size: 12px;
  }

  .icon {
    font-size: 18px;
    font-weight: bolder;
  }
`;

const Navbar = () => {
  return (
    <MainContainer>
      <Navlinks>
        <Link to="/">
          <IoHomeOutline className="icon" />
          Home
        </Link>
        <Link to="/translation">
          <IoLanguageSharp className="icon" />
          Translation
        </Link>
        <Link to="/history">
          <MdHistory className="icon" />
          History
        </Link>
        <Link to="/setting">
          <IoSettingsOutline className="icon" />
          Settings
        </Link>
        <Link to="/help">
          <IoIosHelpCircleOutline className="icon" />
          Help
        </Link>
      </Navlinks>
    </MainContainer>
  );
};

export default Navbar;
