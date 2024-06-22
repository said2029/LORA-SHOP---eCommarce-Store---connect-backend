import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { StripeError } from "@stripe/stripe-js";
import { Dispatch, FormEvent, RefObject, SetStateAction, useRef, useState } from "react";

const CheckoutForm = ({ ref_Button_Submit, setloading, amount }: { ref_Button_Submit: RefObject<HTMLButtonElement>, setloading: Dispatch<SetStateAction<boolean>>, amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();

  const pathName = location.origin;

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setloading(true);

    if (!stripe || !elements) {
      return;
    }
    const handleError = (error: StripeError) => {
      setloading(false);
      setErrorMessage(error.message || "");
    };
    // order
    

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setloading(false);
      handleError(submitError);
      return;
    }

    const res = await fetch("/api/create_intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });
    const clientSecret = await res.json();

    const result = await stripe.confirmPayment({
      clientSecret,
      elements,
      confirmParams: {
        return_url: pathName + "/payment_confirm",
      },
    });

    if (result.error) {
      setloading(false);
    } else {
      setloading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <PaymentElement />
        <button className="hidden" ref={ref_Button_Submit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;