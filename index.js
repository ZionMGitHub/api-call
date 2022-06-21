fetch('https://deep-index.moralis.io/api/v2/0x6BB5971129066120D665034D78B32c1A35bAB55E/nft?chain=eth&format=decimal', {
  method: "GET",
  headers: {'accept': 'application/json'},
  headers: {'X-API-Key': 'oeMAODGcFunFg8dBgm5CdgrcfUIA1HZA36o3g0eTxvcP6Pv6OsgHmuGOmXCxTPYU'}
})
  .then(response => response.json())
  .then(json => console.log(json));