import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer pNFdHXovdzoxhPljoXSk87fDGWCx7KMSvTKcPE43VeHY8QWWQ3UAO6b9XdlxUX89Dx7wD4vxcN9cQYB4l6EyyB-BL_DdRcGaEqZNyjpBfglCuTFogM4iECyMkUB4X3Yx",
  },
});
