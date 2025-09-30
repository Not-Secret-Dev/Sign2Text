import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  min-height: 100dvh;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 80px 24px 84px; /* 84px bottom padding for navbar clearance */
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

const ContentCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.05);
  border: 1px solid #dbeafe;
  width: 100%;
  max-width: 600px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 24px;
    background: linear-gradient(to bottom, #0ea5e9, #0284c7);
    border-radius: 2px;
  }
`;

const FaqItem = styled.div`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const Question = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: "❓";
    font-size: 1.25rem;
  }
`;

const Answer = styled.p`
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
`;

const ContactSection = styled.div`
  margin-top: 32px;
  text-align: center;
`;

const ContactTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 16px 0;
`;

const ContactText = styled.p`
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 20px 0;
`;

const ContactButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  color: white;
  text-decoration: none;
  border-radius: 14px;
  font-size: 1.05rem;
  font-weight: 600;
  min-width: 180px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const Help = () => {
  const faqs = [
    {
      question: "How does Sign2Text work?",
      answer:
        "Sign2Text uses computer vision and machine learning to translate sign language into English text in real time. It captures hand gestures via your device’s webcam, processes them using MediaPipe for hand landmark detection, and classifies the gestures into words using a TensorFlow model. The result is displayed instantly on the screen—no special hardware required.",
    },
    {
      question: "What sign languages does Sign2Text support?",
      answer:
        "The current version focuses on a custom set of commonly used gestures (word-level recognition). While it’s built with American Sign Language (ASL) principles in mind, it’s not yet a full ASL translator. Future updates aim to support ASL, PSL (Pakistani Sign Language), and other sign languages through expanded datasets.",
    },
    {
      question: "Do I need special equipment to use Sign2Text?",
      answer:
        "No! Sign2Text runs entirely in your web browser and only requires a standard webcam—no data gloves, sensors, or mobile apps needed. This makes it highly accessible across laptops, desktops, and even tablets with cameras.",
    },
    {
      question: "Is Sign2Text accurate?",
      answer:
        "In testing, the system achieved ~88% accuracy for predefined gestures under good lighting and clear hand visibility. Accuracy may decrease in low light, with fast movements, or if hands are partially obscured. We’re continuously improving the model with more training data.",
    },
    {
      question: "Can Sign2Text translate full sentences?",
      answer:
        "Currently, Sign2Text recognizes individual words or gestures, not full sentences. However, the system is designed to be extendable, and future versions will incorporate Natural Language Processing (NLP) to support sentence-level translation and contextual understanding.",
    },
    {
      question: "Does Sign2Text work offline?",
      answer:
        "The current prototype requires an internet connection because it sends video frames to a Flask backend for processing. Future enhancements may include client-side AI models (e.g., TensorFlow.js) to enable offline functionality.",
    },
    {
      question: "Will Sign2Text speak the translated text aloud?",
      answer:
        "Text-to-speech (TTS) is planned as a future feature. This will allow non-signers to hear the translated message, creating a true two-way communication bridge—especially useful in classrooms, clinics, or public services.",
    },
    {
      question: "Is my video data stored or shared?",
      answer:
        "No. Video frames are processed in real time and not saved on any server. Your privacy is prioritized—Sign2Text only uses the camera feed for immediate translation and discards it afterward.",
    },
  ];

  return (
    <MainContainer>
      <Header>
        <Logo>Sign2Text</Logo>
        <Tagline>Your guide to seamless communication</Tagline>
      </Header>

      <ContentCard>
        <SectionTitle>Help & Support</SectionTitle>

        {faqs.map((faq, index) => (
          <FaqItem key={index}>
            <Question>{faq.question}</Question>
            <Answer>{faq.answer}</Answer>
          </FaqItem>
        ))}

        <ContactSection>
          <ContactTitle>Need More Help?</ContactTitle>
          <ContactText>
            Our support team is ready to assist you with any questions or
            technical issues.
          </ContactText>
          <ContactButton to="/settings">Contact Support</ContactButton>
        </ContactSection>
      </ContentCard>
    </MainContainer>
  );
};

export default Help;
