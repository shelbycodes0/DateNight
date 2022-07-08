import axios from "axios";

// code after 'Bearer' === Yelp API KEY
//  Yelp Client ID: 1vTUJFHJtQlHQuhWbf4Usw

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer RC6kC28OFD6k4PdG6_rUjrJRSaoVNgqh-NsT1mcUBX4WsxobSiw-INmOV4q8FvX9fD2RSNdGCHYhhKz2C604Q-tqlBMVz2h1V66CFeEAaOX42LNRNUEVoSX8nF7HYnYx",
  },
});
