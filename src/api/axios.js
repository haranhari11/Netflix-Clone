import axios from "axios";

// base ulr to make request to movie database

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
