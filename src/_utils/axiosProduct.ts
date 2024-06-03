import axiosClient from "./axiosClient";

const getProductsApi = (page = 0,categorys=[""]) =>
  axiosClient.get(`/products?ProducName=&ProductCategory=${categorys}&page=${page}`);
const getProductApi = (id:string) =>
  axiosClient.post(`/product`,{id:id});

export default {
  getProductApi, getProductsApi,
};
