import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import TranslationPng from "/TranslationCamera.png";

const MainContainer = styled.div`
  height: 85vh;
  height: calc(100vh - 15vh);
  @supports (height: 100dvh) {
    height: 85dvh;
  }

  .camera-area {
    position: relative;
    margin-left: 5%;
    height: 50%;
    max-width: 90%;
    background-color: #dddddd;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
  }

  .placeholder-text {
    font-family: var(--inter);
    font-size: 18px;
    color: #555;
    text-align: center;
    padding: 0 20px;
  }

  /* Responsive adjustments */
  @media (max-width: 810px) {
    .camera-area {
      height: auto;
      max-height: 40vh;
      max-height: 40dvh;
      margin: 0 auto;
      width: 85%;
    }
  }

  @media (max-width: 728px) {
    .camera-area {
      width: 88%;
      max-height: 38dvh;
    }
  }

  @media (max-width: 412px) {
    padding: 15px 0;
    .camera-area {
      width: 90%;
      max-height: 35dvh;
    }
  }

  @media (max-width: 390px) {
    .camera-area {
      width: 92%;
      max-height: 34dvh;
    }
  }

  @media (max-width: 384px) {
    .camera-area {
      width: 92%;
      max-height: 33dvh;
    }
  }

  @media (max-width: 375px) {
    padding: 12px 0;
    .camera-area {
      width: 93%;
      max-height: 32dvh;
    }
  }

  @media (max-width: 360px) {
    .camera-area {
      width: 94%;
      max-height: 30dvh;
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
    font-size: 22px;
    margin: 24px auto;
  }
  @media (max-width: 728px) {
    font-size: 18px;
    margin: 22px auto;
  }
  @media (max-width: 412px) {
    font-size: 20px;
    margin: 20px auto;
  }
  @media (max-width: 390px) {
    font-size: 20px;
    margin: 18px auto;
  }
  @media (max-width: 384px) {
    font-size: 19px;
    margin: 17px auto;
  }
  @media (max-width: 375px) {
    font-size: 18px;
    margin: 16px auto;
  }
  @media (max-width: 360px) {
    font-size: 18px;
    margin: 15px auto;
  }
`;

const Tagline = styled.div`
  text-align: center;

  h1 {
    font-size: 28px;
    line-height: 35px;
    font-weight: 400;
    color: #0d171c;
    margin: 20px auto 12px;
    font-family: var(--inter);
  }

  button {
    width: 150px;
    height: 45px;
    border: none;
    color: #f7fafc;
    font: 400 16px/24px var(--inter);
    border-radius: 10px;
    background-color: #12a3ed;
    cursor: pointer;
    transition: all 0.2s ease;
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

  /* Responsive button */
  @media (max-width: 810px) {
    button {
      width: 145px;
      height: 43px;
      font-size: 15px;
    }
  }
  @media (max-width: 728px) {
    button {
      width: 142px;
      height: 42px;
    }
  }
  @media (max-width: 412px) {
    button {
      width: 140px;
      height: 40px;
      font-size: 14px;
    }
  }
  @media (max-width: 390px) {
    button {
      width: 138px;
      height: 40px;
    }
  }
  @media (max-width: 384px) {
    button {
      width: 135px;
      height: 39px;
      font-size: 13px;
    }
  }
  @media (max-width: 375px) {
    button {
      width: 135px;
      height: 39px;
    }
  }
  @media (max-width: 360px) {
    button {
      width: 130px;
      height: 38px;
      font-size: 13px;
    }
  }
`;

const TranslationBox = styled.div`
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
  font-family: var(--inter);
  font-size: 18px;
  color: #0d171c;
  text-align: center;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #cce6ff;

  @media (max-width: 412px) {
    font-size: 16px;
    padding: 10px 15px;
  }
`;

const Translation = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.style.display = "block";
        setIsCameraActive(true);
        setError(null);
      }
    } catch (err) {
      console.error("Camera error:", err);
      setError("Camera access denied or unavailable.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      videoRef.current.style.display = "none";
      setIsCameraActive(false);
    }
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <MainContainer>
      <Header>
        <p>Translate From Sign</p>
      </Header>

      <div
        className="camera-area"
        onClick={!isCameraActive ? startCamera : undefined}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            !isCameraActive && startCamera();
          }
        }}
        aria-label={isCameraActive ? "Live camera feed" : "Tap to start camera"}
      >
        {!isCameraActive ? (
          error ? (
            <div className="placeholder-text">{error}</div>
          ) : (
            <img
              src={TranslationPng}
              alt="Tap to start camera"
              style={{ width: "80%", maxHeight: "80%", objectFit: "contain" }}
            />
          )
        ) : null}
        <video ref={videoRef} autoPlay muted playsInline aria-hidden="true" />
      </div>

      <Tagline>
        <h1>Translate Sign Language</h1>
        <button
          onClick={() => {
            if (!isCameraActive) {
              startCamera();
            } else {
              // Later: trigger frame capture & send to Flask
              alert("Camera is active! Ready to translate.");
            }
          }}
        >
          {isCameraActive ? "Translating..." : "Start Translation"}
        </button>
      </Tagline>

      <TranslationBox>
        {isCameraActive
          ? "Sign in front of the camera..."
          : "Translation will appear here"}
      </TranslationBox>
    </MainContainer>
  );
};

export default Translation;
