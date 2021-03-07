import * as React from "react";
import styled from "styled-components";
import { Icon } from "../../Ui/common/Icon";

export interface ContactSocialMediaProps {
  isHighlited: boolean;
  className?: string;
}

const ContactSocialMedia: React.FunctionComponent<ContactSocialMediaProps> = (
  props
) => {
  return (
    <StyledSection className={props.className}>
      <ContactList>
        <ContactListItem isHighlited={props.isHighlited}>
          <ContactLink href="https://github.com/MarvinTomizawa">
            <FullSizedIcon url="https://github.com/fluidicon.png" />
          </ContactLink>
        </ContactListItem>
        <ContactListItem isHighlited={props.isHighlited}>
          <ContactLink href="https://www.linkedin.com/in/marvin-tomizawa-695b70152">
            <FullSizedIcon url="https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" />
          </ContactLink>
        </ContactListItem>
        <ContactListItem isHighlited={props.isHighlited}>
          <ContactLink href="https://www.instagram.com/marvin745">
            <FullSizedIcon url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" />
          </ContactLink>
        </ContactListItem>
      </ContactList>
    </StyledSection>
  );
};

export default ContactSocialMedia;

const StyledSection = styled.section`
  width: 6rem;
`;

const ContactList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  list-style: none;
  width: 100%;
`;

const ContactListItem = styled.li.attrs<ContactSocialMediaProps>((props) => ({
  isHighlited: props.isHighlited,
}))<ContactSocialMediaProps>`
  padding: 1rem;
  border-radius: 50%;
  height: 3.5rem;
  width: 3.5rem;
  ${(props) => props.isHighlited && "border: red solid 1rem;"}
`;

const ContactLink = styled.a`
  background: red;
  display: block;
`;

const FullSizedIcon = styled(Icon)`
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;
