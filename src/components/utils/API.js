import axios from "axios";
const BASEURL = "https://dog.ceo/api/breed/";


export default {
  search: function(query) {
    return axios.get(BASEURL + query + "/images");
  }
};
