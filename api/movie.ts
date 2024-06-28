export const fetchTopRatedMovies = async () => {
  const url = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      //Authorization:
       // "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjdlZTYwNzI1MTFiMmM0MjFmODMxY2E4M2I4MDM2ZCIsIm5iZiI6MTcxOTU2MjIzNy41MTI4LCJzdWIiOiI2NjdlNmNlZTBiMzg2ZTQ2YmUyYTZjYTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._A4hCOez3sMfE_ECzBkD2F98ypvP2oPXa0VtylivvWw",
       },
  }; 

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  const json = await res.json();
  return json.results;

  // fetch(url, options)
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //   .catch(err => console.error('error:' + err));
};
