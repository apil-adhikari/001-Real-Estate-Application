import axios from "axios";

const apiRequest = axios.create({
  // Setting up base backend URL
  baseURL: `http://localhost:8000/api/v1`,
  withCredentials: true, // Allows fontend app to set cookies
});

export default apiRequest;
