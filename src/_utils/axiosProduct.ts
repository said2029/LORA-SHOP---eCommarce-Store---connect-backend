import axios from "axios";

const getProductsApi = async (
  page = 0,
  categorys = [""],
  price = [0, 99999],
  rate = "",
  search = ""
) => {
  const rss = axios.post("/api/products_Manager/products", {
    page,
    categorys,
    price,
    rate,
    search

  })
  return rss;

}

const getProductApi = (id: string) => axios.get(`/api/products_Manager/product/${id}`);
const ReviewProductApi = (id: string) =>
  axios.get(`/api/products_Manager/rating_product/${id}`);

export { getProductApi, ReviewProductApi };
export default getProductsApi;
