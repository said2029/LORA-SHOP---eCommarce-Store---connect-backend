import { BriefcaseBusiness, Users } from "lucide-react";
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function DeliveryCard() {
  return (
    <div className="w-full py-6 bg-gradient-to-r from-purple-900 to-deep-purple-700 my-10 flex items-center justify-center">
      <section className="flex gap-6 md:gap-16 flex-wrap items-center justify-center">
        {/* Card */}
        <article className="flex items-center text-white gap-2">
          <div className="bg-red-400 rounded-full p-1 ">
            <BriefcaseBusiness width={25} height={25} />
          </div>
          <div className="flex flex-col leading-4 text-sm">
            <p>Worth</p>
            <p>Investing</p>
          </div>
        </article>
        {/* ==== EndCard ==== */}
        {/* Card */}
        <article className="flex items-center text-white gap-2">
          <div className="bg-red-400 rounded-full p-1">
          <Users width={25} height={25}/>
          </div>
          <div className="flex flex-col leading-4 text-sm">
            <p>Global</p>
            <p>Retailers</p>
          </div>
        </article>
        {/* ==== EndCard ==== */}
        {/* Card */}
        <article className="flex items-center text-white gap-2">
          <div className="bg-red-400 rounded-full p-1">
            <LocalShippingIcon  width={25} height={25}/>
          </div>
          <div className="flex flex-col leading-4 text-sm">
            <p>Quick</p>
            <p>Delivery</p>
          </div>
        </article>
        {/* ==== EndCard ==== */}
        {/* Card */}
        <article className="flex items-center text-white gap-2">
          <div className="bg-red-400 rounded-full p-1">
            <PaymentIcon  width={25} height={25}/>
          </div>
          <div className="flex flex-col leading-4 text-sm">
            <p>Secure</p>
            <p>Transction</p>
          </div>
        </article>
        {/* ==== EndCard ==== */}
      </section>
    </div>
  );
}
