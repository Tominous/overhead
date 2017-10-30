const io = require('socket.io-client');

const latitude = 45.4697;
const longitude = -73.7449;

const socket = io('http://localhost:3001', {
  query: {
    latitude,
    longitude,
  },
});

socket.on('connect', () => {
  console.log(`CLIENT.CONNECT: ID ${socket.id}`);
});

socket.on('planes.update', (data) => {
  const respPlanes = data.acList.reduce((memo, plane) => {
    const { Id, Icao, Alt, Lat, Long, posTime } = plane;
    const posDate = new Date(posTime);
    memo.push({
      Id,
      Icao,
      Alt,
      Lat,
      Long,
      posTime: posDate.toUTCString(),
    });
    return memo;
  }, []);

  console.log(`PLANES.UPDATE: Timestamp ${data.stm}\n  ${respPlanes}`);
});
