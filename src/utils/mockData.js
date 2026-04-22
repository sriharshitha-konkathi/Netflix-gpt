// Create generic lists to map onto multiple items so it looks like a real database
const baseMovies1 = Array.from({ length: 15 }, (_, i) => ({
  id: 1000 + i,
  title: `Action Movie ${i + 1}`,
  poster_path: `https://picsum.photos/id/${10 + i}/200/300`,
}));

const baseMovies2 = Array.from({ length: 15 }, (_, i) => ({
  id: 2000 + i,
  title: `Comedy Highlight ${i + 1}`,
  poster_path: `https://picsum.photos/id/${30 + i}/200/300`,
}));

const baseMovies3 = Array.from({ length: 15 }, (_, i) => ({
  id: 3000 + i,
  title: `Sci-Fi Thriller ${i + 1}`,
  poster_path: `https://picsum.photos/id/${50 + i}/200/300`,
}));

const baseMovies4 = Array.from({ length: 15 }, (_, i) => ({
  id: 4000 + i,
  title: `Drama Hit ${i + 1}`,
  poster_path: `https://picsum.photos/id/${70 + i}/200/300`,
}));

const baseMovies5 = Array.from({ length: 15 }, (_, i) => ({
  id: 5000 + i,
  title: `Upcoming Gem ${i + 1}`,
  poster_path: `https://picsum.photos/id/${90 + i}/200/300`,
}));

// We need ONE valid element as the very first list item for the MainContainer
const bannerMovie = {
  id: 111,
  original_title: "Inception: The Dream",
  overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg" // Using known TMDB hash
};

export const mockNowPlaying = [bannerMovie, ...baseMovies1];
export const mockPopular = [...baseMovies2, bannerMovie];
export const mockTopRated = [...baseMovies3];
export const mockTrending = [...baseMovies4];
export const mockUpcoming = [...baseMovies5];

export const mockTrailerVideo = {
  key: "YoHD9XEInc0", // Inception youtube key
  type: "Trailer"
};
