import SubscribeFrom from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";
// use the render prop and your custom form
const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <section className="mailchimp-section">
      <SubscribeFrom
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onSubmitted={(formData) => subscribe(formData)}
          />
        )}
      />
    </section>
  );
};

export default MailchimpForm;
