const standardMovies = [
  {
    id: 111,
    original_title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology...",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  { id: 222, title: "The Dark Knight", poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { id: 333, title: "Interstellar", poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { id: 444, title: "Avatar", poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
  { id: 555, title: "The Matrix", poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
  { id: 666, title: "Gladiator", poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
  { id: 777, title: "Dune", poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
  { id: 888, title: "The Batman", poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg" }
];

export const mockNowPlaying = standardMovies.map(m => ({ ...m, id: m.id + 1 }));
export const mockPopular = standardMovies.map(m => ({ ...m, id: m.id + 2 }));
export const mockTopRated = standardMovies.map(m => ({ ...m, id: m.id + 3 }));
export const mockTrending = standardMovies.map(m => ({ ...m, id: m.id + 4 }));
export const mockUpcoming = standardMovies.map(m => ({ ...m, id: m.id + 5 }));

export const mockTrailerVideo = {
  key: "YoHD9XEInc0", // Inception trailer
  type: "Trailer"
};
