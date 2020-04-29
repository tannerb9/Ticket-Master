function getAPIEvent() {
  let apiURL = "https://app.ticketmaster.com/discovery/v2/events";
  let apiKey = appKeys.appKey;

  return fetch(
    `${apiURL}?classificationName=music&dmaId=343&${apiKey}`
  ).then((music) => music.json());
}
