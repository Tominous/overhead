const express = require("express");
const fetch = require('isomorphic-fetch');

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/planes", (req, res) => {

  const latitude = 33.43363;
  const longitude = -112.008113;
  const radius = 100;

  const url = `https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${latitude}8&lng=${longitude}&fDstL=0&fDstU=${radius}`;

  return fetch(url)
  .then(
    response => {
      if ( !response.ok ) {
        throw Error('Could not fetch data');
      }
      return response.json();
    },
    error => console.log('Fetch Error occured:', error)
  )
  .then( (json) => {
    res.send(json);
  });

});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
