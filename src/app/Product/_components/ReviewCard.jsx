import RatingStars from "@/app/Products/_components/RatingStars";
import Image from "next/image";

export default function ReviewCard({
  name = "",
  stars = 5,
  dis = "",
  image = "",
}) {
  return (
    <div className="w-full flex shadow-xl  p-2 gap-2 items-center rounded-lg">
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <Image
          width={512}
          height={512}
          className="h-full w-full object-cover"
          src={image}
          alt=""
        />
      </div>
      <div>
        <div>
          <RatingStars size="small" startconst={stars} />
          <h1>{name}</h1>
          <span className="line-clamp-4 text-sm text-gray-700">{dis}</span>
        </div>
      </div>
    </div>
  );
}
