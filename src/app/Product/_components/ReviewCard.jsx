import RatingStars from "@/app/Products/_components/RatingStars";
import Image from "next/image";

export default function ReviewCard() {
  return (
    <div className="w-full flex shadow-xl  p-2 gap-2 justify-center items-center rounded-lg">
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <Image
          width={512}
          height={512}
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div>
        <div>
          <RatingStars size="small" startconst={4.5} />
          <h1>name name</h1>
          <span className="line-clamp-2 text-sm text-gray-700">
            A biscuit is a flour-based baked food product. This article covers
            the type of biscuit found in Africa, Asia, and Europe, which is
          </span>
        </div>
      </div>
    </div>
  );
}
