import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoLanguageSharp } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useState } from "react";

const MainContainer = styled.nav`
  height: 11vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fafc;
  font-family: var(--inter);
`;

const Navlinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${(props) => (props.$isActive ? "#0a1216" : "#0d171c")};
  font-size: 12px;
  transition: all 0.2s ease;
`;

const IconWrapper = styled.div`
  font-size: 18px;
  transition: all 0.2s ease;
  filter: ${(props) =>
    props.$isActive ? "drop-shadow(0.5px 0.5px 0px currentColor)" : "none"};
  transform: ${(props) => (props.$isActive ? "scale(1.1)" : "scale(1)")};
  color: ${(props) => (props.$isActive ? "#0a1216" : "#0d171c")};
`;

const Navbar = () => {
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState(location.pathname);

  const navItems = [
    { path: "/", icon: IoHomeOutline, label: "Home" },
    { path: "/translation", icon: IoLanguageSharp, label: "Translation" },
    { path: "/history", icon: MdHistory, label: "History" },
    { path: "/setting", icon: IoSettingsOutline, label: "Settings" },
    { path: "/help", icon: IoIosHelpCircleOutline, label: "Help" },
  ];

  return (
    <MainContainer>
      <Navlinks>
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeIcon === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              $isActive={isActive}
              onClick={() => setActiveIcon(item.path)}
            >
              <IconWrapper $isActive={isActive}>
                <IconComponent />
              </IconWrapper>
              {item.label}
            </NavLink>
          );
        })}
      </Navlinks>
    </MainContainer>
  );
};

export default Navbar;
