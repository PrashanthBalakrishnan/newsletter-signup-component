import { useState } from "react";
import check from "../../assets/images/icon-success.svg";
import "./Thanks.css";

interface ThanksProps {
  email: string;
}

const Thanks: React.FC<ThanksProps> = ({ email }) => {
  const [Dismiss, setDismiss] = useState(false);
  const handleDismiss = () => {
    setDismiss(true);
  };
  return (
    <>
      {Dismiss ? null : (
        <section className="thankyou">
          <img src={check} alt="check" />
          <div className="thankyou__text">
            <h2>Thanks for subscribing!</h2>
            <p>
              A confirmation email has been sent to <span>{email}</span>. Please
              open it and click the button inside to confirm your subscription.
            </p>
          </div>

          <button onClick={handleDismiss} className="btn thankyouBtn">
            Dismiss message
          </button>
        </section>
      )}
    </>
  );
};
export default Thanks;
