import * as React from "react";
import { withTranslation } from "react-i18next";
import "whatwg-fetch";

export interface ContactFormProps {
  t: Function;
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
        return <p>{this.props.t("contact.thanks")}</p>;
      }

      return <button>{this.props.t("contact.submit")}</button>;
    };

    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xoqpoyke"
        method="POST"
      >
        <div>
          <label>{this.props.t("contact.email")}</label>
          <input type="email" name="email" />
        </div>

        <div>
          <label>{this.props.t("contact.subject")}</label>
          <input type="text" name="subject" />
        </div>

        <div>
          <label>{this.props.t("contact.message")}</label>
          <input type="text" name="message" />
        </div>

        {getSubmit()}

        {this.state.status === 500 && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(event: any) {
    event.preventDefault();
    const form = event.target;

    if (process.env.REACT_APP_NOT_ALLOW_EMAIL) {
      this.setState({ ...this.state, status: 200 });
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
        this.setState({ status: 500 });
        console.log(error);
      });
  }
}

export default withTranslation()(ContactForm);
