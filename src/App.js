import axios from "axios";
import { useEffect } from "react";
import API_URLS from "./config/API_URLS";

function App() {

  useEffect(() => {
    axios.get(`${API_URLS.baseUrl}${API_URLS.firstApi}`).then(response => {
      console.log("first api response ", response);
    }).catch(error => {
      console.error('Error fetching data: ', error);
    })
  });

  return (
    <div>
      <p >Home Page Changed</p>
    </div>
  );
}

export default App;
