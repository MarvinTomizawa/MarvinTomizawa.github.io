import * as React from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import "whatwg-fetch";
import { getTheme } from "../../Ui/Variables";

export interface ContactFormProps {
  t: Function;
  highlightSocialMedia: Function;
  className?: string;
}

export interface ContactFormState {
  status: number;
}

class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
  constructor(props: ContactFormProps) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: 0,
    };
  }

  render() {
    const getSubmit = () => {
      if (this.state.status === 200) {
        return <p>{this.props.t("contact.done")}</p>;
      }

      if (this.state.status / 400 >= 1) {
        return <p>{this.props.t("contact.error")}</p>;
      }

      return <SubmitButton>{this.props.t("contact.submit")}</SubmitButton>;
    };

    return (
      <StyledForm
        className={this.props.className}
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xoqpoyke"
        method="POST"
      >
        <InputsFieldSet>
          <FormInput
            type="email"
            name="email"
            placeholder={this.props.t("contact.email")}
          />

          <FormInput
            type="text"
            name="subject"
            placeholder={this.props.t("contact.subject")}
          />

          <FormTextArea
            name="message"
            placeholder={this.props.t("contact.message")}
            rows={15}
            wrap="soft"
          />
        </InputsFieldSet>
        {getSubmit()}
      </StyledForm>
    );
  }

  submitForm(event: any) {
    event.preventDefault();
    const form = event.target;

    if (process.env.REACT_APP_NOT_ALLOW_EMAIL) {
      this.props.highlightSocialMedia();
      this.setState({ ...this.state, status: 500 });
      return;
    }

    fetch("https://formspree.io/f/xoqpoyke", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => this.setState({ status: response.status }))
      .catch((error) => {
        this.props.highlightSocialMedia();
        this.setState({ status: 500 });
        console.log(error);
      });
  }
}

export default withTranslation()(ContactForm);

const StyledForm = styled.form`
  width: 100%;
`;

const InputsFieldSet = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FormInput = styled.input`
  background-color: ${({ theme }) => getTheme(theme).inside};
  border: none;
  color: ${({ theme }) => getTheme(theme).text};
  font-size: 1rem;
  margin: 0.1rem;
  padding: 0.75rem 1rem;
  width: 100%;
  ::placeholder {
    color: ${({ theme }) => getTheme(theme).text};
    filter: brightness(70%);
    font-size: 1rem;
    opacity: 1;
  }
`;

const FormTextArea = styled.textarea`
  background-color: ${({ theme }) => getTheme(theme).inside};
  border: none;
  color: ${({ theme }) => getTheme(theme).text};
  font-size: 1rem;
  margin: 0.1rem;
  padding: 0.75rem 1rem;
  resize: none;
  width: 100%;
  ::placeholder {
    color: ${({ theme }) => getTheme(theme).text};
    filter: brightness(70%);
    font-size: 1rem;
    opacity: 1;
  }
`;

const SubmitButton = styled.button`
  background-color: transparent;
  border: ${({ theme }) => getTheme(theme).text} solid .1rem;
  color: ${({ theme }) => getTheme(theme).text};
  display: block;
  padding: 0.5rem 1rem.5rem;
  text-transform: uppercase;
  margin: 0.25rem;
  margin-left: auto;
`;
