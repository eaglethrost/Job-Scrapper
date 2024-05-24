import axios from "./node_modules/axios/index.js";

const getData = async () => {
    const url: string = "https://web-scraping.dev/products";
    const response = await axios.get(url);
    console.log(response);
}

getData();