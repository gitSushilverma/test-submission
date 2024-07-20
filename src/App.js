import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://test-submission-1.onrender.com/globe-data/globe-data")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!data) return <div>Loading...</div>;
  console.log({ data });
  return (
    <div>
      <h2 className="font-bold text-center text-[30px]">
        Documents Required for Study Abroad Loan
      </h2>
      <section class="main-container">
        <div class="main">
          <div class="big-circle">
            {data.data.thirdCircle &&
              data.data.thirdCircle.map((item, index) => (
                <div className="icon-block text-black" key={index}>
                  <div className="data flex flex-col">
                    <p className="font-semibold">{item.title}</p>
                    <li>
                      <ul>{item.message}</ul>
                    </li>
                  </div>
                </div>
              ))}
          </div>
          <div class="circle">
            {data.data.secondCircle &&
              data.data.secondCircle.map((item, index) => (
                <div className="icon-block text-black" key={index}>
                  <div className="data">
                    <p className="font-semibold">{item.title}</p>
                    <li>
                      <ul>{item.message}</ul>
                    </li>
                  </div>
                </div>
              ))}
          </div>
          <div class="innercircle">
            {data.data.firstCircle &&
              data.data.firstCircle.map((item, index) => (
                <div className="icon-block text-black" key={index}>
                  <div className="data">
                    <p className="font-semibold">{item.title}</p>
                    <ul>
                      <li>{item.message}</li>
                    </ul>
                  </div>
                </div>
              ))}
          </div>
          <div class="center-logo">
            {data.data.fixedata &&
              data.data.fixedata.map((item, index) => (
                <div key={index}>
                  <div className="data">
                    <p>{item.title}</p>
                    {item.message}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
