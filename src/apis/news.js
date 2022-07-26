import axios from "axios";

// Di sini kita membuat instance dari axios
const tmdbInstance = axios.create({
  // baseURL: "https://newsapi.org/v2",
  baseURL: "https://the-lazy-media-api.vercel.app/",
  params: {
    // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
    // country: "id",
    // apiKey: "ce33e74e3b3e46cdb8962bd372fa4d4a",
    // api_key: "556ecd387272c98def9d1545c8a02076",

  },
});

// Jangan lupa diexport karena akan digunakan di tempat lainnya
export default tmdbInstance;
