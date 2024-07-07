export const fetchTopRatedMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjdlZTYwNzI1MTFiMmM0MjFmODMxY2E4M2I4MDM2ZCIsIm5iZiI6MTcyMDM1MTA5MS4zNjIzNjYsInN1YiI6IjY2N2U2Y2VlMGIzODZlNDZiZTJhNmNhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ttlMrHHLffAR3-vU-AxzuPOUbKfQEqvncWgwaX6V1Vw",
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

export const fetchMovieDetails = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjdlZTYwNzI1MTFiMmM0MjFmODMxY2E4M2I4MDM2ZCIsIm5iZiI6MTcyMDM1MTA5MS4zNjIzNjYsInN1YiI6IjY2N2U2Y2VlMGIzODZlNDZiZTJhNmNhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ttlMrHHLffAR3-vU-AxzuPOUbKfQEqvncWgwaX6V1Vw",
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  const json = await res.json();
  return json;
};
