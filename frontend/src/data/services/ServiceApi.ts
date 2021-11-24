import axios from "axios";

//DECLARA O AXIOS PARA USAR O BACK END NA PORTA 3333 OU EM UMA PASSA POR PROD
export const serviceApi = axios.create({
  baseURL: https://api-target.herokuapp.com,
});
