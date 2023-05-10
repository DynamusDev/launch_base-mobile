import axios from "axios";
const url = "https://swapi.dev/api/";
export const api = axios.create({
  baseURL: url,
});

export const sock = url;
