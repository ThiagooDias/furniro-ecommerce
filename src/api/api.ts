import axios, { AxiosInstance } from "axios";

export const API: AxiosInstance = axios.create({
  baseURL: "https://furniro-back-end.onrender.com"
})