// import the library version of axios
import axios from "axios";
// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://appy-wrapping.developme.space/api",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",
        // use your own key
        Authorization: "",
    },
});
