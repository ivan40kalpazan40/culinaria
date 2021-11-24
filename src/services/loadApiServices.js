// https://api.discogs.com/database/search?q=nirvana&&key=EAdGtGvwgrJtEOSJsVqa&secret=JgmxAIMcXgnmqDzWoVTmvGfZGMEWXRKH
const discogsURL = 'https://api.discogs.com';
const APP_KEY = 'EAdGtGvwgrJtEOSJsVqa';
const APP_SECRET = 'JgmxAIMcXgnmqDzWoVTmvGfZGMEWXRKH';
const credentials = `&key=${APP_KEY}&secret=${APP_SECRET}`;
const param = '';

export const getProducts = () => {
  console.log('Load Products');

  return fetch(
    `${discogsURL}/database/search?q=${param}&per_page=100${credentials}`
  ).then((res) => res.json());
};

export const getArtist = (id) => {
  return fetch(`${discogsURL}/artists/${id}`).then((response) =>
    response.json()
  );
};
