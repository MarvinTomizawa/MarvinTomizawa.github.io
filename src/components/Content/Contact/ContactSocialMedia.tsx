import * as React from "react";
import styled from "styled-components";

export interface ContactSocialMediaProps {
  isHighlited: boolean;
}

const ContactSocialMedia: React.FunctionComponent<ContactSocialMediaProps> = (
  props
) => {
  return <StyledSection isHighlited={props.isHighlited}></StyledSection>;
};

export default ContactSocialMedia;

const StyledSection = styled.section.attrs<ContactSocialMediaProps>(
  (props) => ({
    isHighlited: props.isHighlited,
  })
)<ContactSocialMediaProps>``;
