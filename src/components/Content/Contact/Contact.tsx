import * as React from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import { getTheme } from "../../Ui/Variables";
import ContentWrapper from "../ContentStyle";
import ContactForm from "./ContactForm";
import ContactSocialMedia from "./ContactSocialMedia";

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
        <ContactSocialMediaStyled isHighlited={this.state.isHighlited} />

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
  padding: 2rem;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  padding: 0.5rem;
  font-size: 3rem;
  font-style: oblique;
`;

const TitleDivision = styled.span`
  width: 8%;
  border-bottom: ${({ theme }) => getTheme(theme).text} solid 0.25rem;
  border-radius: 10px;
`;

const SubTitle = styled.p`
  padding-top: 2.5rem;
  font-size: 1.1rem;
  color: ${({ theme }) => getTheme(theme).primaryLight};
`;

const ContactFormStyled = styled(ContactForm)`
  width: 50%;
  margin: 3rem auto;
`;

const ContactSocialMediaStyled = styled(ContactSocialMedia)`
  width: 20%;
`;
