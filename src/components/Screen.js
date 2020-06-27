import React, { Fragment } from "react";

const Screen = ({ data }) => {
  return (
    <div className="Screen">
      {!data ? (
        <h1>Search for a location</h1>
      ) : (
        <Fragment>
          <div className="Screen__content">
            <span className="Screen__temperature">
              {data.temp.toFixed()}&deg;
            </span>
            <div className="Screen__locationDetails">
              <span className="Screen__city">{data.city}</span>
            </div>
          </div>

          {/* <h1>{`${data.city}, ${data.country}`}</h1> */}
          {/* {console.log(data.localTime.hour())} */}
          {/* <p>Local Time: {data.localTime}</p>
          <p>Local Sunrise: {data.localSunriseTime}</p>
          <p>Local Sunset: {data.localSunsetTime}</p> */}
        </Fragment>
      )}
    </div>
  );
};

export default Screen;
