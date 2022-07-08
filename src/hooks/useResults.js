import { useEffect, useState } from "react";
import Yelp from "../api/Yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    // **This 'try' statement will show an error message
    // to the User if the api fails to load *************
    try {
      const response = await Yelp.get("/search", {
        // params are defined on Yelp developer API webpage
        // input any parms that you want to utilize in the search
        params: {
          limit: 50,
          term: searchTerm,
          location: "charlotte",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong. 🙁 Try again later.");
    }
  };
  useEffect(() => {
    searchApi("grill");
  }, []);

  return [searchApi, results, errorMessage];
};
