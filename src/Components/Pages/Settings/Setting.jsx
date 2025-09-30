import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

// Styled Components (same as before)
const SettingsContainer = styled.div`
  min-height: 100dvh;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 24px 20px 84px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

const BackButton = styled(Link)`
  background: white;
  border: 1px solid #bae6fd;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 16px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(14, 165, 233, 0.15);
  color: #0ea5e9;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f9ff;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(14, 165, 233, 0.2);
    border-color: #7dd3fc;
  }
`;

const Title = styled.h1`
  color: #0f172a;
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
`;

const SettingsCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 0;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.05);
  border: 1px solid #dbeafe;
  overflow: hidden;
`;

const Section = styled.div`
  padding: 24px 24px 0;

  &:not(:last-child) {
    padding-bottom: 16px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 20px;
    background: linear-gradient(to bottom, #0ea5e9, #0284c7);
    border-radius: 2px;
  }
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: 1px solid #f1f5f9;
  }
`;

const SettingLabel = styled.span`
  flex: 1;
  font-size: 1.05rem;
  color: #1e293b;
  font-weight: 500;
`;

const Select = styled.select`
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 10px 16px;
  font-size: 1rem;
  color: #1e293b;
  min-width: 140px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #0ea5e9;
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2);
  }

  option {
    font-weight: 500;
  }
`;

const NavigationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.2s ease;

  &:not(:last-child) {
    border-bottom: 1px solid #f1f5f9;
  }

  &:hover {
    background: #f8fafc;
    transform: translateX(4px);
  }
`;

const NavLabel = styled.span`
  font-size: 1.05rem;
  color: #1e293b;
  font-weight: 500;
`;

const NavIcon = styled.span`
  color: #94a3b8;
  font-size: 1.25rem;
  font-weight: bold;
  transition: transform 0.2s ease;
`;

const Settings = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    appLanguage: "English",
    theme: "System Default",
    voice: "Female Voice",
    targetLanguage: "English",
  });

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem("sign2text_settings");
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        console.warn("Failed to parse settings");
      }
    }
  }, []);

  // Save settings
  useEffect(() => {
    localStorage.setItem("sign2text_settings", JSON.stringify(settings));
    if (settings.theme === "Dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings]);

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleNavigation = (path) => {
    if (path === "/contact") {
      navigate("/help");
    } else {
      alert(`"${path}" will be available soon.`);
    }
  };

  return (
    <SettingsContainer>
      <Header>
        <BackButton to="/">←</BackButton>
        <Title>Settings</Title>
      </Header>

      <SettingsCard>
        <Section>
          <SectionTitle>General</SectionTitle>

          <SettingItem>
            <SettingLabel>App Language</SettingLabel>
            <Select
              value={settings.appLanguage}
              onChange={(e) =>
                handleSettingChange("appLanguage", e.target.value)
              }
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Urdu</option>
              <option>Chinese</option>
            </Select>
          </SettingItem>

          <SettingItem>
            <SettingLabel>Theme</SettingLabel>
            <Select
              value={settings.theme}
              onChange={(e) => handleSettingChange("theme", e.target.value)}
            >
              <option>System Default</option>
              <option>Light</option>
              <option>Dark</option>
            </Select>
          </SettingItem>
        </Section>

        {/* Translation Section – simplified */}
        <Section>
          <SectionTitle>Translation</SectionTitle>

          <SettingItem>
            <SettingLabel>Output Language</SettingLabel>
            <Select
              value={settings.targetLanguage}
              onChange={(e) =>
                handleSettingChange("targetLanguage", e.target.value)
              }
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Urdu</option>
              <option>Chinese</option>
            </Select>
          </SettingItem>

          <SettingItem>
            <SettingLabel>Voice (for TTS)</SettingLabel>
            <Select
              value={settings.voice}
              onChange={(e) => handleSettingChange("voice", e.target.value)}
            >
              <option>Female Voice</option>
              <option>Male Voice</option>
            </Select>
          </SettingItem>
        </Section>

        {/* About Section */}
        <Section>
          <SectionTitle>About</SectionTitle>

          <NavigationItem onClick={() => handleNavigation("/terms")}>
            <NavLabel>Terms of Service</NavLabel>
            <NavIcon>›</NavIcon>
          </NavigationItem>

          <NavigationItem onClick={() => handleNavigation("/privacy")}>
            <NavLabel>Privacy Policy</NavLabel>
            <NavIcon>›</NavIcon>
          </NavigationItem>

          <NavigationItem onClick={() => handleNavigation("/contact")}>
            <NavLabel>Contact Us</NavLabel>
            <NavIcon>›</NavIcon>
          </NavigationItem>
        </Section>
      </SettingsCard>
    </SettingsContainer>
  );
};

export default Settings;
