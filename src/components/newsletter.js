import React, { createRef } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://now.us4.list-manage.com/subscribe/post?u=3814449e93d5456a4bd90d80c&amp;id=538ecaf597";

const Newsletter = () => {
  const emailRef = createRef(undefined);

  return (
    <div className="absolute">
      <h1>Signup to be notified when we launch</h1>

      <MailchimpSubscribe
        className="centered"
        url={url}
        render={({ subscribe, status, message }) => {
          switch (status) {
            case "sending":
              return <div>Sending...</div>;
            case "success":
              return <div>Subscribed.</div>;
            case "error":
              return <div dangerouslySetInnerHTML={{ __html: message }} />;
            default:
              return (
                <form
                  // className="centered"
                  onSubmit={() => {
                    event.preventDefault();

                    subscribe({
                      EMAIL: emailRef.current.value
                    });
                  }}
                >
                  <div>
                    <input
                      placeholder="Enter your email"
                      type="email"
                      ref={emailRef}
                    />
                    <input type="submit" value="subscribe" />
                  </div>
                </form>
              );
          }
        }}
      />
      <style jsx>{`
        .centered {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          flex-direction: column;
        }
        h2 {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Newsletter;
