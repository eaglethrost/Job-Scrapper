import axios from "./node_modules/axios/index.js";

const getData = async () => {
    const url = "https://www.reddit.com/r/unsw/comments/wvr006/comp1531/";
    const response = await axios.get(url);
    console.log(response);
}

getData();