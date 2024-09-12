import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiHandling() {
  const [data, setData] = useState([]);
  //    "https://countriesnow.space/api/v0.1/countries/states"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/states"
        );
        setData(response.data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  });

  return (
    <div className="container">
      {data.map((itemObj, index) => (
        <p key={index}>{itemObj.name}</p>
      ))}
    </div>
  );
}
