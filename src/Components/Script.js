import React, { useState, useEffect } from "react";
import "./Script.css";
import axios from "axios";

function Script() {
  const [city, setCity] = useState();
  const [Temp, setTemp] = useState();
  const [Loading, setLoading] = useState(true);
  const [c, setC] = useState();

  useEffect(() => {
    if (!Temp && !c) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });

  const handleButton = () => {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a2cf10d74440b82959d651a63a833575`;
    axios.get(url).then((response) => {
      setC(response.data.name);
      setTemp(String(response.data.main.temp).split(".")[0]);
    });
  };

  return (
    <>
      <div className="main">
        <div className="rectangle1">
          <div className="Header">The Weather App</div>
          {Loading ? (
            <span className="fa-sharp fa-solid fa-2x fa-refresh fa-spin"></span>
          ) : (
            <>
              <div className="Temperature">{Temp}° Celcius</div>
              <div className="cityname">{c}</div>
            </>
          )}
        </div>
        <div className="rectangle2">
          <div className="content">
            <input
              type="text"
              onChange={(e) => {setCity(e.target.value)}}
              value={city}
              name="city"
              placeholder="Enter Cityname"
            />
          </div>

          <button onClick={handleButton}>Get Weather</button>
        </div>
      </div>

      <div className="picture">
        <img src="Image1.png" />
      </div>
    </>
  );
}

export default Script;
