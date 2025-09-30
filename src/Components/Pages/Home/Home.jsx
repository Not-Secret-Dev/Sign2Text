import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeImg from "/HomeImg.png";

const MainContainer = styled.div`
  min-height: 100dvh;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 80px 24px 84px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 32px;
  max-width: 600px;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0 0 8px;
  letter-spacing: -0.02em;
`;

const Tagline = styled.p`
  font-size: 1.125rem;
  color: #475569;
  margin: 0;
  font-weight: 500;
  line-height: 1.5;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 350px;
  width: 100%;
`;

const HeroImage = styled.div`
  width: 100%;
  aspect-ratio: 9/16;
  background: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  border: 1px solid #dbeafe;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #0ea5e9, #0284c7);
  }
`;

const Image = styled.img`
  width: 85%;
  max-width: 250px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.08));
`;

const ContentSection = styled.div`
  text-align: center;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 16px;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 32px;
  font-weight: 400;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 14px 28px;
  border: none;
  border-radius: 14px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border: none;
  border-radius: 14px;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  gap: 8px;
  min-width: 160px;
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 14px;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  color: #0ea5e9;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  gap: 8px;
  min-width: 160px;
  background: white;
  border: 2px solid #bae6fd;
  box-shadow: 0 4px 6px -1px rgba(14, 165, 233, 0.1);

  &:hover {
    transform: translateY(-2px);
    background: #f0f9ff;
    border-color: #7dd3fc;
    box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 6px -1px rgba(14, 165, 233, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

// Responsive adjustments
const ResponsiveContainer = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    ${MainContainer} {
      padding: 70px 20px 30px;
    }

    ${Logo} {
      font-size: 2.25rem;
    }

    ${Tagline} {
      font-size: 1rem;
    }

    ${HeroImage} {
      aspect-ratio: 4/3;
      max-width: 400px;
      margin-bottom: 28px;
      border-radius: 18px;
    }

    ${Title} {
      font-size: 2rem;
      margin-bottom: 14px;
    }

    ${Description} {
      font-size: 1rem;
      margin-bottom: 28px;
    }

    ${Button} {
      padding: 12px 24px;
      font-size: 1rem;
      min-width: 140px;
    }
  }

  @media (max-width: 480px) {
    ${MainContainer} {
      padding: 60px 16px 24px;
    }

    ${Logo} {
      font-size: 2rem;
    }

    ${HeroImage} {
      aspect-ratio: 3/2;
      max-width: 100%;
      margin-bottom: 24px;
      border-radius: 16px;
    }

    ${Title} {
      font-size: 1.75rem;
    }

    ${Description} {
      font-size: 0.95rem;
      margin-bottom: 24px;
    }

    ${ButtonGroup} {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    ${Button} {
      width: 100%;
      max-width: 280px;
      padding: 14px;
    }
  }

  @media (max-width: 360px) {
    ${MainContainer} {
      padding: 50px 12px 20px;
    }

    ${Logo} {
      font-size: 1.875rem;
    }

    ${Title} {
      font-size: 1.625rem;
    }

    ${Description} {
      font-size: 0.9rem;
    }
  }

  @media (max-height: 700px) {
    ${MainContainer} {
      padding: 40px 24px 20px;
    }

    ${HeroImage} {
      aspect-ratio: 5/4;
      margin-bottom: 20px;
    }

    ${Header} {
      margin-bottom: 24px;
    }
  }
`;

const Home = () => {
  const handleGetStarted = () => {
    console.log("Get Started clicked");
  };

  const handleLearnMore = () => {
    console.log("Learn More clicked");
  };

  return (
    <ResponsiveContainer>
      <MainContainer>
        <Header>
          <Logo>Sign2Text</Logo>
          <Tagline>Breaking communication barriers through AI</Tagline>
        </Header>

        <HeroSection>
          <HeroImage>
            <Image src={HomeImg} alt="Sign language translation in action" />
          </HeroImage>

          <ContentSection>
            <Title>Bridge the Communication Gap</Title>
            <Description>
              Transform sign language into text in real-time using advanced AI
              technology. Make communication accessible and effortless for
              everyone.
            </Description>

            <ButtonGroup>
              <PrimaryButton to="/translation" onClick={handleGetStarted}>
                Get Started
              </PrimaryButton>
              <SecondaryButton to="/help" onClick={handleLearnMore}>
                Learn More
              </SecondaryButton>
            </ButtonGroup>
          </ContentSection>
        </HeroSection>
      </MainContainer>
    </ResponsiveContainer>
  );
};

export default Home;
