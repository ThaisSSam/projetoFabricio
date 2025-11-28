import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true, // allow cookies (for Sanctum CSRF tokens and session cookies)
});

export default Api;