import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const page = body.page,
            categorys = body.categorys,
            price = body.price,
            rate = body.rate,
            search = body.search
        const fatch = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/products?searchProduct=${search}&ProductCategory=${categorys}&page=${page}&minPrice=${price[0]}&maxPrice=${price[1]}`);
        const respons = await fatch.json();
        return NextResponse.json(respons);
    } catch (error) {
        console.log(error);
    }

}