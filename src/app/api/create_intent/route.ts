import { NextResponse } from "next/server";
import Stripe from "stripe";

let key = null;



async function getKay() {
  const respons = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/getStoreSetting");
  const data = await respons.json();
  return data.body.Stripe_Secret;
}
key = await getKay();

if (!key) {
  throw new Error("Missing Stripe Secret Key");
}
const stripe = new Stripe(key!, {
  typescript: true,
  apiVersion: "2023-08-16",
});
export async function POST(request: any) {
  const data: any = await request.json();
  const amount = data.amount;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "USD",
    });
    return NextResponse.json(paymentIntent.client_secret, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}