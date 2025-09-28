import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoLanguageSharp } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

const MainContainer = styled.nav`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: min(100% - 48px, 420px);
  height: 60px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(226, 232, 240, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 12px;
  /* Prevent any text from becoming a <p> */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #6b7280;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  padding: 6px 0;
  transition: color 0.2s ease;
  position: relative;
  width: 60px;
  /* Ensure no paragraph behavior */
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &.active {
    color: #1f2937;
  }

  &:hover {
    color: #1f2937;
  }
`;

const IconWrapper = styled.span`
  /* Changed from div to span (inline-safe) */
  font-size: 20px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActiveIndicator = styled.span`
  /* Use span instead of div for minimal footprint */
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 4px;
  background: #1f2937;
  border-radius: 2px;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: opacity 0.25s ease;
  display: block;
`;

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: IoHomeOutline, label: "Home" },
    { path: "/translation", icon: IoLanguageSharp, label: "Translate" },
    { path: "/history", icon: MdHistory, label: "History" },
    { path: "/setting", icon: IoSettingsOutline, label: "Settings" },
    { path: "/help", icon: IoIosHelpCircleOutline, label: "Help" },
  ];

  return (
    <MainContainer role="navigation" aria-label="Main navigation">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <div key={item.path} style={{ position: "relative", width: "60px" }}>
            <ActiveIndicator $isActive={isActive} />
            <NavItem to={item.path} className={isActive ? "active" : ""}>
              <IconWrapper>
                <Icon />
              </IconWrapper>
              <span>{item.label}</span> {/* Explicit span, no implicit <p> */}
            </NavItem>
          </div>
        );
      })}
    </MainContainer>
  );
};

export default Navbar;
