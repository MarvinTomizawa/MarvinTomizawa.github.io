import * as React from "react";
import styled from "styled-components";
import ContentWrapper from "../ContentStyle";
import ContactForm from "./ContactForm";

const Contact: React.FunctionComponent = () => {
  return (
    <StyledWrapper>
      <ContactForm />
    </StyledWrapper>
  );
};

export default Contact;

const StyledWrapper = styled(ContentWrapper)`
  padding: 2rem;
`;