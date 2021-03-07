import * as React from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import { getTheme } from "../../Ui/Variables";
import ContentWrapper from "../ContentStyle";
import ContactForm from "./ContactForm";

export interface ContactProps {
  t: Function;
}

export interface ContactState {
  isHighlited: boolean;
}

class Contact extends React.Component<ContactProps, ContactState> {
  constructor(props: ContactProps) {
    super(props);
    this.highlightSocialMedia = this.highlightSocialMedia.bind(this);
    this.state = { isHighlited: false };
  }
  render() {
    return (
      <StyledWrapper>
        <TitleWrapper>
          <Title>{this.props.t("contact.title")}</Title>
          <TitleDivision />
          <SubTitle>{this.props.t("contact.subtitle")}</SubTitle>
        </TitleWrapper>

        <ContactFormStyled highlightSocialMedia={this.highlightSocialMedia} />
      </StyledWrapper>
    );
  }

  highlightSocialMedia() {
    this.setState({ ...this.state, isHighlited: true });
  }
}

export default withTranslation()(Contact);

const StyledWrapper = styled(ContentWrapper)`
  position: relative;
  width: 100%;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    padding: 0.5rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 0 1rem;
`;

const Title = styled.h1`
  padding: 0.5rem;
  font-size: 2rem;
  font-style: oblique;
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    font-size: 3rem;
  }
`;

const TitleDivision = styled.span`
  width: 4rem;
  border-bottom: ${({ theme }) => getTheme(theme).text} solid 0.25rem;
  border-radius: 10px;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    width: 5rem;
  }
`;

const SubTitle = styled.p`
  color: ${({ theme }) => getTheme(theme).primaryLight};
  font-size: 0.9rem;
  padding-top: 0.5rem;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    font-size: 1.1rem;
    padding-top: 2.5rem;
  }
`;

const ContactFormStyled = styled(ContactForm)`
  margin: 1rem auto;
  width: 90%;
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    width: 50%;
    margin: 3rem auto;
  }
`;