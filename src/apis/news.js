import axios from "axios";

// Di sini kita membuat instance dari axios
const tmdbInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
    country: "id",
    apiKey: "ce33e74e3b3e46cdb8962bd372fa4d4a",

  },
});

// Jangan lupa diexport karena akan digunakan di tempat lainnya
export default tmdbInstance;
