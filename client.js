const io = require('socket.io-client');
const socket = io('http://localhost:3001');

socket.on('message', (msg) => {
  console.log('MESSAGE:');
  console.log(msg);
});

socket.on('planes', (feed) => {
  const respPlanes = feed.acList.reduce((memo, plane) => {
    const posDate = new Date(plane.PosTime);
    memo.push({
      id: plane.Id,
      icao: plane.Icao,
      alt: plane.Alt,
      lat: plane.Lat,
      lon: plane.Long,
      posTime: posDate.toUTCString(),
    });
    return memo;
  }, []);
  console.log(respPlanes);
});
