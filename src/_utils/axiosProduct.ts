import axiosClient from "./axiosClient";

const getProductsApi = (page = 0,categorys=[""],price=[0,99999]) =>
  axiosClient.get(`/products?ProducName=&ProductCategory=${categorys}&page=${page}&minPrice=${price[0]}&maxPrice=${price[1]}`);
const getProductApi = (id:string) =>
  axiosClient.post(`/product`,{id:id});

export default {
  getProductApi, getProductsApi,
};
