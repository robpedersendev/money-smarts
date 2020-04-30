import React, { createRef } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./newsletter.css";

const url =
  "https://now.us4.list-manage.com/subscribe/post?u=3814449e93d5456a4bd90d80c&amp;id=538ecaf597";
// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe className="emailSub" url={url} />;

// use the render prop and your custom form
const CustomForm = () => (
  <MailchimpSubscribe
    className="emailSub"
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "green" }}>Subscribed !</div>
        )}
      </div>
    )}
  />
);
const Newsletter = () => {
  return (
    <div className="column">
      <h1>
        Ever wondered what you really need to make at the end of the day to make
        all your ends meet? <br></br>Not just your bills, but your savings,
        retirement, travel and your other goals? We will help you do just that.
        Sign up to be notified once we are live.
      </h1>

      <CustomForm className="emailSub" />
    </div>
  );
};

export default Newsletter;
