import axios from "axios";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    axios.get("http://localhost:4000/firstApi").then(response => {
      console.log("first api response ", response);
    }).catch(error => {
      console.error('Error fetching data: ', error);
    })
  });

  return (
    <div>
      <p >Home Page</p>
    </div>
  );
}

export default App;
