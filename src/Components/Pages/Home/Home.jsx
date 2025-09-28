import styled from "styled-components";
import HomeImg from "/HomeImg.png";

const MainContainer = styled.div`
  height: 85vh;
  height: calc(100vh - 15vh);

  @supports (height: 100dvh) {
    height: 85dvh;
  }

  img {
    height: 50%;
    margin-left: 5%;
    background-color: #dddddd;
    border-radius: 10px;
  }

  @media (max-width: 810px) {
    height: auto;
    min-height: 85vh;
    min-height: 85dvh;

    img {
      height: auto;
      max-height: 40vh;
      max-height: 40dvh;
      width: auto;
      max-width: 85%;
      margin: 0 auto;
      display: block;
      object-fit: contain;
    }
  }

  @media (max-width: 728px) {
    img {
      max-height: 38dvh;
      max-width: 88%;
    }
  }

  @media (max-width: 412px) {
    padding: 15px 0;

    img {
      max-height: 35dvh;
      max-width: 90%;
    }
  }

  @media (max-width: 390px) {
    img {
      max-height: 34dvh;
      max-width: 92%;
    }
  }

  @media (max-width: 384px) {
    img {
      max-height: 33dvh;
      max-width: 92%;
    }
  }

  @media (max-width: 375px) {
    padding: 12px 0;

    img {
      max-height: 32dvh;
      max-width: 93%;
    }
  }

  @media (max-width: 360px) {
    img {
      max-height: 30dvh;
      max-width: 94%;
    }
  }
`;

const Header = styled.div`
  margin: 28px auto;
  text-align: center;
  font-size: 18px;
  line-height: 23px;
  font-weight: 500;
  color: #0d171c;
  font-family: var(--inter);

  @media (max-width: 810px) {
    margin: 24px auto;
    font-size: 22px;
    line-height: 22px;
  }

  @media (max-width: 728px) {
    margin: 22px auto;
    font-size: 18px;
    line-height: 21px;
  }

  @media (max-width: 412px) {
    margin: 20px auto;
    font-size: 20px;
    line-height: 21px;
  }

  @media (max-width: 390px) {
    margin: 18px auto;
    font-size: 20px;
    line-height: 20px;
  }

  @media (max-width: 384px) {
    margin: 17px auto;
    font-size: 19px;
    line-height: 20px;
  }

  @media (max-width: 375px) {
    margin: 16px auto;
    font-size: 18px;
    line-height: 20px;
  }

  @media (max-width: 360px) {
    margin: 15px auto;
    font-size: 18px;
    line-height: 19px;
  }
`;

const Tagline = styled.div`
  text-align: center;

  h1 {
    font-size: 28px;
    line-height: 35px;
    font-weight: 400;
    color: #0d171c;
    margin-top: 20px;
    margin-bottom: 12px;
    font-family: var(--inter);
  }

  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #0d171c;
    margin-top: 4px;
    margin-bottom: 12px;
    font-family: var(--inter);
  }

  button {
    width: 150px;
    height: 45px;
    border: none;
    color: #f7fafc;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 10px;
    font-family: var(--inter);
    background-color: #12a3ed;
    cursor: pointer;
    transition: all 0.2s ease;
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(18, 163, 237, 0.3);

    &:hover {
      background-color: #0f8fd0;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(18, 163, 237, 0.4);
    }

    &:active {
      transform: translateY(1px);
      box-shadow: 0 2px 4px rgba(18, 163, 237, 0.2);
      background-color: #0d7cb9;
    }
  }

  @media (max-width: 810px) {
    h1 {
      font-size: 26px;
      line-height: 32px;
      margin-top: 18px;
      margin-bottom: 10px;
    }

    p {
      font-size: 15px;
      line-height: 22px;
      margin-bottom: 10px;
      padding: 0 5px;
    }

    button {
      width: 145px;
      height: 43px;
      font-size: 15px;
      line-height: 22px;

      &:hover {
        transform: translateY(-1px);
      }

      &:active {
        transform: translateY(1px);
      }
    }
  }

  @media (max-width: 728px) {
    h1 {
      font-size: 24px;
      line-height: 30px;
      margin-top: 16px;
      margin-bottom: 9px;
    }

    p {
      font-size: 15px;
      line-height: 21px;
      margin-bottom: 9px;
      padding: 0 8px;
    }

    button {
      width: 142px;
      height: 42px;
      font-size: 15px;
      line-height: 21px;
    }
  }

  @media (max-width: 412px) {
    h1 {
      font-size: 22px;
      line-height: 28px;
      margin-top: 14px;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 8px;
      padding: 0 10px;
    }

    button {
      width: 140px;
      height: 40px;
      font-size: 14px;
      line-height: 20px;
    }
  }

  @media (max-width: 390px) {
    h1 {
      font-size: 21px;
      line-height: 27px;
      margin-top: 13px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      padding: 0 12px;
    }

    button {
      width: 138px;
      height: 40px;
    }
  }

  @media (max-width: 384px) {
    h1 {
      font-size: 20px;
      line-height: 26px;
      margin-top: 12px;
    }

    p {
      font-size: 13px;
      line-height: 19px;
      padding: 0 14px;
    }

    button {
      width: 135px;
      height: 39px;
      font-size: 13px;
      line-height: 19px;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 20px;
      line-height: 26px;
      margin-top: 11px;
      margin-bottom: 7px;
    }

    p {
      font-size: 13px;
      line-height: 19px;
      margin-bottom: 7px;
      padding: 0 15px;
    }

    button {
      width: 135px;
      height: 39px;
      font-size: 13px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 19px;
      line-height: 25px;
      margin-top: 10px;
      margin-bottom: 6px;
    }

    p {
      font-size: 13px;
      line-height: 18px;
      margin-bottom: 6px;
      padding: 0 18px;
    }

    button {
      width: 130px;
      height: 38px;
      font-size: 13px;
      line-height: 18px;
    }
  }
`;

const Home = () => {
  return (
    <MainContainer>
      <Header>
        <p>Sign2Text</p>
      </Header>
      <img src={HomeImg} alt="Home" />
      <Tagline>
        <h1>Translate Sign Language</h1>
        <p>Communicate effortlessly with real-time sign language translation</p>
        <button>Learn More</button>
      </Tagline>
    </MainContainer>
  );
};

export default Home;
