"use client";
import { addDiscountCoupon } from "@/Redux/feature/ShopCards/ShopCards";
import { getStoreState } from "@/Redux/store";
import { Button } from "@material-tailwind/react";
import ShopCard from "@/components/header/_componets/shopCard";
import useFetch from "@/hooks/useFetch";
import UseIsClient from "@/hooks/IsClient";
import { PaymentsOutlined, CreditCardOutlined } from "@mui/icons-material";
import { Store, Truck } from "lucide-react";
import { Suspense, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// stripe
import CheckoutForm from "./_components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { ShowToasit_Error } from "@/_lib/ToasitControle";
import axiosClient from "@/_utils/axiosClient";



export default function page() {
  const storeData = useSelector(getStoreState);
  // Stripe key
  const Stipe_public_key = storeData?.storeSetting?.settingData?.body?.Stripe_Key;
  let [stripePromise, set_stripePromise] = useState<any>();
  const dispatch = useDispatch();
  const refCouponInput = useRef<HTMLInputElement>(null);
  const route = useRouter();
  const checkout_info: any = useFetch("/api/checkout_info");

  const [totalPrice, setTotalPrice] = useState(storeData?.ShopCard?.totelPrice);


  const [loadingCoupon, setloadingCoupon] = useState(false);
  const [bayment_method, setbayment_method] = useState("card");
  const [Shipping_Methods, setShipping_Methods] = useState(checkout_info?.body?.Shipping_Methods_one_price || 60);
  const formOrder = useRef<HTMLFormElement>(null);
  const stripeButtonSubmit = useRef<HTMLButtonElement>(null);

  const applyCoupon = async () => {
    if (refCouponInput.current) {
      setloadingCoupon(true);
      const respons = await fetch(`/api/products_Manager/coupon`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: refCouponInput.current?.value.trim(),
          totalPrice: totalPrice
        }),
      })
      const body = await respons.json();
      if (body.status == "sucess") {
        dispatch(addDiscountCoupon({ discount: body.coupon.discount, codeCoupon: body.coupon.code }));
        setloadingCoupon(false);
      } else {
        setloadingCoupon(false);
        ShowToasit_Error(body.msg);
      }
    }
  };


  const isClient = UseIsClient();
  // stripe options
  const options: StripeElementsOptions = {
    mode: "payment",
    currency: "usd",
    amount: Math.round((totalPrice)),
  };
  const dataOrder = useRef({});
  const [loading, setloading] = useState(false);

  function applay() {
    if (storeData?.ShopCard?.items.length <= 0) {
      ShowToasit_Error("Please add item to cart");
      return;
    }
    if (bayment_method == "card") {

      if (stripeButtonSubmit != null) stripeButtonSubmit.current?.click();
    }
    else {
      route.push("/payment_confirm");
    }
  }

  async function Calculate_total() {
    const body2 = {
      ids: storeData?.ShopCard.items,
      discount: storeData?.ShopCard.discount,
      shoppingCost: Shipping_Methods

    }
    const data = await axiosClient.post("/calculate_total", body2);
    const body = data?.data;
    if (body.status == "success") {
      setTotalPrice(body?.totalPrice);
    }

  }

  useEffect(() => {
    Calculate_total();
  }, [storeData?.ShopCard.items, Shipping_Methods])

  useEffect(() => {
    if (Stipe_public_key != undefined)
      set_stripePromise(loadStripe(Stipe_public_key));
  }, [Stipe_public_key])


  return (
    <>
      {isClient &&
        <>
          <div className="grid sm:px-10 lg:grid-cols-2 px-2 md:px-11 mt-6">
            <div className="px-4 pt-8">
              <p className="text-xl font-medium">
                01. {checkout_info?.body?.shipping_name_one}
              </p>
              <p className="text-gray-700">
                {checkout_info?.body?.shipping_one_desc}
              </p>
              {isClient && (
                <>
                  <section className="overflow-y-scroll flex-grow mt-5 min-h-[200px] max-h-[400px]">
                    {storeData.ShopCard.items.length <= 0 && (
                      <div className="w-full h-full min-h-full space-y-6 flex flex-col justify-center items-center">
                        <Store className="mt-36" size={40} strokeWidth={0.75} />
                        <p className="font-semibold">No Item Added Yet!</p>
                      </div>
                    )}
                    {storeData.ShopCard.items.map((e: any, i: number) => {
                      return <ShopCard index={i} key={i} itemCard={e} />;
                    })}
                  </section>
                </>
              )}
              <p className="mt-8 text-lg font-medium">
                2. {checkout_info?.body?.shipping_name_two}
              </p>
              <div className="mt-5 grid gap-6 text-gray-700">
                <div className="relative">
                  <input
                    className="peer hidden"
                    id="radio_1"
                    type="radio"
                    name="radio"
                  />
                  <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 " />
                  <label
                    onClick={() => { setShipping_Methods(+checkout_info?.body?.Shipping_Methods_one_price) }}
                    className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                    htmlFor="radio_1"
                  >
                    <Truck strokeWidth={1} />
                    <div className="ml-5">
                      <span className="mt-2 font-semibold">{checkout_info?.body?.Shipping_Methods_one_name}</span>
                      <p className="text-slate-500 text-sm leading-6">
                        {checkout_info?.body?.Shipping_Methods_one_cost}: {checkout_info?.body?.Shipping_Methods_one_delivery} :{checkout_info?.body?.Shipping_Methods_one_price}
                      </p>
                    </div>
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="peer hidden"
                    id="radio_2"
                    type="radio"
                    name="radio"
                  />
                  <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 " />
                  <label
                    onClick={() => { setShipping_Methods(+checkout_info?.body?.Shipping_Methods_two_price) }}
                    className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                    htmlFor="radio_2"
                  >
                    <Truck strokeWidth={1} />
                    <div className="ml-5">
                      <span className="mt-2 font-semibold">{checkout_info?.body?.Shipping_Methods_two_name}</span>
                      <p className="text-slate-500 text-sm leading-6">
                        {checkout_info?.body?.Shipping_Methods_two_cost}: {checkout_info?.body?.Shipping_Methods_two_delivery} :{checkout_info?.body?.Shipping_Methods_two_price}
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
              <div>
                <p className="text-xl font-medium">
                  03. {checkout_info?.body?.payment_method}
                </p>
                <section className="mt-2">
                  <div className="flex justify-around gap-3">
                    {storeData?.storeSetting?.settingData?.body?.Cash_On_Delivery ==
                      true && (
                        <div className="flex-grow relative">
                          <input
                            id="Cash_On_Delivery"
                            className="peer hidden"
                            type="radio"
                            name="Payment_Method"
                          />
                          <span className="peer-checked:border-teal-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 " />

                          <label
                            onClick={() => { setbayment_method("cash") }}
                            className="border text-gray-700 peer-checked:text-gray-600 peer-checked:border-gray-900 w-full cursor-pointer p-3 rounded-lg space-x-3 flex gap-4 items-center "
                            htmlFor="Cash_On_Delivery"
                          >
                            <PaymentsOutlined className="font-thin" />
                            Cash On Delivery
                          </label>
                        </div>
                      )}

                    <div className="flex-grow relative">
                      <input
                        id="Credit_Card"
                        className="peer hidden"
                        name="Payment_Method"
                        type="radio"
                      />
                      <span className="peer-checked:border-teal-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 " />
                      <label
                        onClick={() => {
                          setbayment_method("card")
                        }}
                        className="border text-gray-700 peer-checked:text-gray-600 peer-checked:border-gray-900 w-full cursor-pointer p-3 rounded-lg space-x-3 flex gap-4 items-center "
                        htmlFor="Credit_Card"
                      >
                        <CreditCardOutlined />
                        Credit Card
                      </label>
                    </div>
                    {/* <div className="flex-grow relative">
                  <input
                    name="Payment_Method"
                    id="RazorPay"
                    className="peer hidden"
                    type="radio"
                  />
                  <span className="peer-checked:border-teal-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 " />
                  <label
                    className="border text-gray-500 peer-checked:text-gray-600 peer-checked:border-gray-900 w-full cursor-pointer p-3 rounded-lg space-x-3 flex gap-4 items-center"
                    htmlFor="RazorPay"
                  >
                    <CreditCardOutlined />
                    RazorPay
                  </label>
                </div> */}
                  </div>
                </section>
                {bayment_method == "card" &&

                  <div className="my-3">
                    {/* stripe */}
                    {stripePromise ?

                      <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm
                          amount={Math.round(totalPrice)}
                          setloading={setloading}
                          ref_Button_Submit={stripeButtonSubmit}
                        />
                      </Elements>


                      : <span>loading...</span>

                    }
                  </div>
                }
              </div>

              <p className="text-xl font-medium mt-8">Payment Details</p>
              <p className="text-gray-700">
                Complete your order by providing your payment details.
              </p>
              <form ref={formOrder} action={async (formData) => {
                const address = {
                  "street": formData.get("street"),
                  "PhoneNumber": formData.get("PhoneNumber"),
                  "email": formData.get("email"),
                  "country": formData.get("country"),
                  "zipCode": formData.get("billing-zip"),
                  "city": formData.get("city-zip"),
                };

                formData.set("method", bayment_method)
                formData.set("address", JSON.stringify(address));
                formData.set("discount", storeData?.ShopCard?.discount);
                formData.set("ShoppingCost", Shipping_Methods.toString());
                formData.set("products", JSON.stringify(storeData?.ShopCard?.items));
                formData.set("totalPrice", (totalPrice).toFixed(2));
                if (window.localStorage.getItem("UserId") && window.localStorage.getItem("UserId") != "") {
                  formData.set("custamer", window.localStorage.getItem("UserId") || "");
                }
                dataOrder.current = Object.fromEntries(formData);
                window.localStorage.setItem("order", JSON.stringify(dataOrder.current));
                applay();



              }} className="">
                <label
                  htmlFor="email"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  {checkout_info?.body?.email_address}
                </label>
                <div className="relative">
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="your.email@gmail.com"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="card-holder"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Card Holder
                </label>
                <div className="relative">
                  <input
                    required
                    type="text"
                    id="card-holder"
                    name="full_Name"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your full name here"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="card-holder"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    required
                    type="number"
                    id="card-holder"
                    name="PhoneNumber"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your Phone Number"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>
                  </div>
                </div>


                <label
                  htmlFor="billing-address"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Billing Address
                </label>
                <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                  <div className="relative flex-shrink-0 sm:w-7/12">
                    <input
                      required
                      type="text"
                      id="billing-address"
                      name="street"
                      className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder={checkout_info?.body?.street_address}
                    />
                  </div>
                  <input
                    type="number"
                    maxLength={10}
                    name="billing-zip"
                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none flex-grow focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={checkout_info?.body?.zip_code}
                  />
                  <input
                    required
                    type="text"
                    name="city-zip"
                    className="flex-shrink-0 flex-grow rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none  focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={checkout_info?.body?.city}
                  />
                  <input
                    required
                    type="text"
                    name="country"
                    className="flex-shrink-0 flex-grow rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none  focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={checkout_info?.body?.country}
                  />
                </div>
                {/* coupon */}
                {isClient &&
                  (storeData.ShopCard.discount <= 0 ? (
                    <div className="flex gap-5 mt-8 font-semibold">
                      <input
                        placeholder="input your coupon code"
                        className="flex-grow px-2 py-[10px] rounded-md focus:ring-0 focus:outline-none focus:border-base-color-500  border-2"
                        ref={refCouponInput}
                        type="text"
                      />
                      <Button
                        loading={loadingCoupon}
                        onClick={applyCoupon}
                        className="border-gray-400 hover:border-none font-semibold duration-500 hover:bg-base-color-500 text-gray-800 hover:text-white"
                        variant="outlined"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        Apply
                      </Button>
                    </div>
                  ) : (
                    <div className="bg-teal-50 rounded-sm px-2 flex justify-between mt-7 py-2">
                      <p className="text-teal-600">Coupon Applied</p>
                      <p className="text-red font-bold text-red-500">{storeData?.ShopCard?.codeCoupon
                      }</p>
                    </div>
                  ))}

                {isClient && (
                  <>
                    <div className="mt-6 border-t border-b py-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          {checkout_info?.body?.sub_total}
                        </p>
                        <p className="font-semibold text-gray-900">
                          ${storeData.ShopCard.sub_total}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          {checkout_info?.body?.shipping_cost}
                        </p>
                        <p className="font-semibold text-gray-900">${Shipping_Methods}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          {checkout_info?.body?.discount}
                        </p>
                        <p className="font-semibold text-teal-400">
                          {storeData.ShopCard.discount}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        {checkout_info?.body?.total_cost}
                      </p>
                      <p className="text-2xl font-semibold text-gray-900">
                        ${totalPrice}
                      </p>
                    </div>
                  </>
                )}
              </form>
              <Button
                onClick={() => {
                  formOrder.current?.requestSubmit();
                }}
                type="submit"
                loading={loading}
                className='mt-4 mb-8 w-full rounded-md disabled:opacity-50 bg-gray-900 px-6 py-3 font-medium text-white'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                .
                {checkout_info?.body?.apply_button}
              </Button>
            </div>
          </div>
        </>
      }
    </>
  );
}
