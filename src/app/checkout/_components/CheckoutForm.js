import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
const CheckoutForm = ({ ref_Button_Submit,setloading }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    setloading(true);
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const handleError = (error) => {
      setloading(false);
      setErrorMessage(error.message);
    };

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setloading(false)
      handleError(submitError);
      return;
    }

    const res = await fetch("/api/create_intent", {
      method: "POST",
      body: JSON.stringify({
        amount: 20,
      }),
    });
    const clientSecret = await res.json();

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/googleSuccess",
      },
    });

    if (result.error) {
      setloading(false)
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      setloading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button className="hidden" ref={ref_Button_Submit}>
        submit
      </button>
    </form>
  );
};

export default CheckoutForm;
