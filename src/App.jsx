import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import jsonData from "./json/demo.json";

function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
    console.log(jsonData);
  }, []);

  return (
    <div>
      <h2>{jsonData.title}</h2>
      <p>{jsonData.desc}</p>
      <h6>{jsonData.end}</h6>
    </div>
  );
}

export default App;
