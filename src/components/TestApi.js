import React, { useState, useEffect } from "react";

const TestApi = () => {
  const [windSpeed, setWindSpeed] = useState("");

  useEffect(() => {
    const lat = 58.7984;
    const lng = 17.8081;
    const params = "windSpeed";

    fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
      {
        headers: {
          Authorization:
            "aa7e9ff4-2a53-11eb-8ea5-0242ac130002-aa7ea06c-2a53-11eb-8ea5-0242ac130002",
        },
      }
    )
      .then((response) => response.json())
      .then((jsonData) => Object.entries(jsonData)[0][1])
      .then((data) => setWindSpeed((prev) => (prev = data[0].windSpeed.sg)));
  }, []);
  useEffect(() => {
    console.log(windSpeed);
  }, [windSpeed]);

  function WindAnswer() {
    if (windSpeed < 10) {
     return <p>Good to sail</p>;
    } else if (windSpeed > 10 && windSpeed < 20) {
     return <p>Risky</p>;
    } else {
     return <p>Don't sail!</p>;
    }
  }
  return (
    <div>
      <WindAnswer />
    </div>
  );
};

export default TestApi;
