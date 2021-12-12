import axios from "axios";

export const Api = axios.create({
  baseURL: "https://artesomos.herokuapp.com",
});
