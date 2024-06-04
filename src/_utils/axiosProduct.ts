import axiosClient from "./axiosClient";

const getProductsApi = (
  page = 0,
  categorys = [""],
  price = [0, 99999],
  rate = ""
) =>
  axiosClient.get(
    `/products?ProducName=&ProductCategory=${categorys}&page=${page}&minPrice=${
      price[0]
    }&maxPrice=${price[1]}${rate != "" && "&rating=" + rate}`
  );
const getProductApi = (id: string) => axiosClient.post(`/product`, { id: id });
const ReviewProductApi = (id: string) =>
  axiosClient.get(`/product/rating/${id}`);

export { getProductApi, ReviewProductApi };
export default getProductsApi;
