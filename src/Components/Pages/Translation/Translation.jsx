import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import TranslationPng from "/TranslationCamera.png";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  min-height: 100dvh;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 24px 20px 0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: calc(84px + env(safe-area-inset-bottom));
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

const HeaderContent = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 6px 0;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #475569;
  margin: 0;
  font-weight: 500;
`;

const CameraContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.05);
  border: 1px solid #dbeafe;
`;

const CameraArea = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background: #f8fafc;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin-bottom: 24px;
  overflow: hidden;
  border: 2px dashed #cbd5e1;

  ${(props) =>
    props.clickable &&
    `
    &:hover {
      border-color: #0ea5e9;
      background: #f0f9ff;
      transform: translateY(-2px);
    }
  `}

  ${(props) =>
    props.active &&
    `
    border: 2px solid #0ea5e9;
    border-radius: 16px;
  `}
`;

const CameraPlaceholder = styled.div`
  text-align: center;
  color: #475569;
  padding: 0 20px;
`;

const CameraIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  opacity: 0.8;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const CameraText = styled.p`
  font-size: 1.25rem;
  margin: 0 0 8px 0;
  color: #1e293b;
  font-weight: 600;
`;

const CameraSubtext = styled.p`
  font-size: 0.95rem;
  margin: 0;
  color: #64748b;
  line-height: 1.5;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  display: ${(props) => (props.show ? "block" : "none")};
  transform: scaleX(1);
`;

const Controls = styled.div`
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  color: white;
  position: relative;
  overflow: hidden;

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

  &:hover::after {
    opacity: 1;
  }
`;

const SecondaryButton = styled(Button)`
  background: white;
  color: #dc2626;
  border: 2px solid #fecaca;

  &:hover:not(:disabled) {
    background: #fef2f2;
    border-color: #fca5a5;
    box-shadow: 0 10px 15px -3px rgba(220, 38, 38, 0.15);
  }
`;

const TranslationBox = styled.div`
  background: white;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.05);
  border: 1px solid #dbeafe;
`;

const TranslationTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: "💬";
  }
`;

const TranslationContent = styled.div`
  min-height: 90px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => (props.active ? "#1e293b" : "#94a3b8")};
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 500;
  border: 1px solid #e2e8f0;
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  font-size: 0.95rem;
  color: #475569;
  font-weight: 500;
`;

const IndicatorDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) =>
    props.status === "active"
      ? "#10b981"
      : props.status === "error"
      ? "#ef4444"
      : "#94a3b8"};
  box-shadow: 0 0 0 3px
    ${(props) =>
      props.status === "active"
        ? "rgba(16, 185, 129, 0.2)"
        : props.status === "error"
        ? "rgba(239, 68, 68, 0.2)"
        : "rgba(148, 163, 184, 0.2)"};
`;

const Translation = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err) {
      console.error("Camera error:", err);
      setError(
        "Unable to access camera. Please check permissions and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraActive(false);
    }
  };

  const captureFrame = () => {
    if (isCameraActive) {
      console.log("Capturing frame for translation...");
    }
  };

  const handleBack = () => {
    stopCamera();
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <MainContainer>
      <Header>
        <BackButton to="/" onClick={handleBack}>
          ←
        </BackButton>
        <HeaderContent>
          <Title>Sign Language Translation</Title>
          <Subtitle>
            Translate sign language in real-time using your camera
          </Subtitle>
        </HeaderContent>
      </Header>

      <CameraContainer>
        <CameraArea
          clickable={!isCameraActive && !isLoading}
          active={isCameraActive}
          onClick={!isCameraActive && !isLoading ? startCamera : undefined}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (
              (e.key === "Enter" || e.key === " ") &&
              !isCameraActive &&
              !isLoading
            ) {
              startCamera();
            }
          }}
          aria-label={
            isCameraActive ? "Live camera feed" : "Start camera for translation"
          }
        >
          {!isCameraActive ? (
            <CameraPlaceholder>
              <CameraIcon src={TranslationPng} alt="Camera icon" />
              <CameraText>{error ? "Camera Error" : "Start Camera"}</CameraText>
              <CameraSubtext>
                {error ? error : "Click to enable camera for translation"}
              </CameraSubtext>
            </CameraPlaceholder>
          ) : null}

          <Video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            show={isCameraActive}
            aria-hidden={!isCameraActive}
          />
        </CameraArea>

        <Controls>
          {!isCameraActive ? (
            <PrimaryButton onClick={startCamera} disabled={isLoading}>
              {isLoading ? "Starting..." : "Start Camera"}
            </PrimaryButton>
          ) : (
            <>
              <PrimaryButton onClick={captureFrame}>
                Capture & Translate
              </PrimaryButton>
              <SecondaryButton onClick={stopCamera}>
                Stop Camera
              </SecondaryButton>
            </>
          )}
        </Controls>

        <StatusIndicator>
          <IndicatorDot
            status={isCameraActive ? "active" : error ? "error" : "inactive"}
          />
          {isCameraActive
            ? "Camera active - Ready for translation"
            : error
            ? "Camera unavailable"
            : "Camera not started"}
        </StatusIndicator>
      </CameraContainer>

      <TranslationBox>
        <TranslationTitle>Translation</TranslationTitle>
        <TranslationContent active={isCameraActive}>
          {isCameraActive
            ? "Sign in front of the camera and click 'Capture & Translate'"
            : "Start the camera to begin translation"}
        </TranslationContent>
      </TranslationBox>
    </MainContainer>
  );
};

export default Translation;
