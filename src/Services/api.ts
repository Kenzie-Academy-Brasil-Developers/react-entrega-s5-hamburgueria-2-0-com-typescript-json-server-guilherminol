import axios from "axios";
const api = axios.create({
  baseURL: "https://hamburgueria2-api.herokuapp.com",
});
export default api;
