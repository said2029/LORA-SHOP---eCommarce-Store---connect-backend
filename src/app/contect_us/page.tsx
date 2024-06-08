import { EmailOutlined, LocationCityOutlined, VibrationOutlined } from "@mui/icons-material";

export default function page() {
  return (
    <div className="mb-20">
      <div className="relative w-full h-52 flex justify-center items-center text-5xl font-bold bg-gray-400 mb-10">
        <img
          className="absolute w-full h-full object-cover z-0"
          src="/images/2148657725.jpg"
          alt=""
        />
        <h1 className="z-10">{"Contect Us"}</h1>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-24 px-10">
        <div className="p-8 rounded-md border border-gray-400 flex justify-center text-center">
          <ul className="space-y-5">
            <li className="text-base-color-500">
              <EmailOutlined style={{ fontSize: "60px" }} />
            </li>
            <li className="text-2xl font-semibold mt-3">Email Us</li>
            <li>
              <p>
                <span className="text-base-color-500">info@kachabazar.com </span> Interactively grow empowered for
                process-centric total linkage.
              </p>
            </li>
          </ul>
        </div>
        <div className="p-8 rounded-md border border-gray-400 flex items-center justify-center text-center">
          <ul className="space-y-5">
            <li className="text-base-color-500">
              <VibrationOutlined style={{ fontSize: "60px" }}   />
            </li>
            <li className="text-2xl font-semibold">Call Us</li>
            <li>
              <p>
                <span className="text-base-color-500">info@kachabazar.com </span> Distinctively disseminate focused solutions clicks-and-mortar ministate.
              </p>
            </li>
          </ul>
        </div>
        <div className="p-8 rounded-md border border-gray-400 flex items-center justify-center text-center">
          <ul className="space-y-5">
            <li className="text-base-color-500">
              <LocationCityOutlined style={{ fontSize: "60px" }}   />
            </li>
            <li className="text-2xl font-semibold">Location</li>
            <li>
              <p>
              Boho One, Bridge Street West, Middlesbrough, North Yorkshire, TS2 1AE.
561-4535 Nulla LA
United States 96522.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
