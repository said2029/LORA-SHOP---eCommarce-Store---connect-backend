import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CarouselItem() {
  const routing = useRouter();

  
  return (
    <div className="w-full h-full bg-black relative ">
      <Image width={750} height={790}
        className="absolute z-0 w-full h-full object-cover top-0 opacity-80"
        alt=""
        src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />

      <div className="flex flex-col items-center justify-center h-full text-white gap-14 z-10">
        <h1 className="text-xl md:text-2xl z-40">
        Belmont Custard Cream
        </h1>
        <Button onClick={() => routing.push("/Product/id")} variant="contained">
          Shop Now
        </Button>
      </div>
    </div>
  );
}
