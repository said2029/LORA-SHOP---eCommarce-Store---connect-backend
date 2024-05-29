import Link from "next/link";
import CheckoutCard from "@/components/Cards/checkoutCard";
export default function ShopCard() {
  /**
   * Renders an array of `CheckoutCard` components, which are likely used to display checkout-related information or functionality.
   */

  const Cards = [<CheckoutCard key={1} />, <CheckoutCard key={2} />];
  return (
    <div className="">
      <div className="mt-4 space-y-6 overflow-y-scroll h-[84vh]">
        <ul className="space-y-4 overflow-y-scroll">{Cards}</ul>

        <div className="space-y-4  text-center  w-full px-4 ">
          <Link
            href="/checkout"
            className="  items-center gap-2 rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
