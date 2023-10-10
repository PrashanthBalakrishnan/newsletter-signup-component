import checkIcon from "../assets/images/icon-list.svg";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import mobileImage from "../assets/images/illustration-sign-up-mobile.svg";
import desktopImage from "../assets/images/illustration-sign-up-desktop.svg";
import clsx from "clsx";
import Thanks from "./Thanks/Thanks";

type FormValues = {
  emailAddress: string;
};

const Form = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      emailAddress: "",
    },
  });

  const onSumit: SubmitHandler<FormValues> = (data) => {
    setEmail(data.emailAddress);
    setSubmitted((prev) => !prev);
    console.log(email);
  };

  return (
    <>
      {submitted ? (
        <Thanks email={email} />
      ) : (
        <section className="component">
          <picture className="mainImage">
            <source srcSet={desktopImage} media="(min-width: 600px)" />
            <img src={mobileImage} alt="newsletter" />
          </picture>
          <div className="form">
            <h1 className="form__title">Stay updated!</h1>
            <p className="form__subheading">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div className="form__info">
              <div className="form__info__item">
                <img src={checkIcon} alt="check icon" />
                <p>Product discovery and building what matters</p>
              </div>
              <div className="form__info__item">
                <img src={checkIcon} alt="check icon" />
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className="form__info__item">
                <img src={checkIcon} alt="check icon" />
                <p>And much more!</p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSumit)}>
              <label htmlFor="email">
                <div className="form__labelContainer">
                  <span className="form__label">Email address</span>
                  <p className="form__error">{errors.emailAddress?.message}</p>
                </div>
                <input
                  id="email"
                  className={clsx(
                    "form__input",
                    errors["emailAddress"] && "input_error"
                  )}
                  placeholder="email@company.com"
                  {...register("emailAddress", {
                    required: "Valid email required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Valid email required",
                    },
                  })}
                />
              </label>
              <button className="btn" disabled={submitted}>
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};
export default Form;
