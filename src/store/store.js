import { observable, makeObservable } from "mobx";
import { configure } from "mobx";

configure({
  useProxies: "never",
});

class movieStore {
  movies = [];
  watchChange = 0;
  constructor() {
    makeObservable(this, {
      movies: observable,
      watchChange: observable,
    });
  }

  addMovie = (movie) => {
    const _movie = {
      ...movie,
      id: this.movies[this.movies.length - 1] ? this.movies.length + 1 : 1,
    };
    this.movies = [...this.movies, _movie];
  };

  deleteMovie = (id) => {
    const updatedMovies = this.movies.filter((movie) => movie.id !== id);
    this.movies = [...updatedMovies];
  };

  watchedMovie = (id) => {
    const _movies = this.movies.filter((movie) => movie.id !== id);
    const updatedMovie = this.movies.find((movie) => movie.id == id);
    this.movies = [..._movies, { ...updatedMovie, watched: true }];
    this.watchChange = this.watchChange += 1;
    return this.movies.filter((movie) => movie.watched !== true);
  };

  unWatchedMovie = (id) => {
    const _movies = this.movies.filter((movie) => movie.id !== id);
    const updatedMovie = this.movies.find((movie) => movie.id == id);
    this.movies = [..._movies, { ...updatedMovie, watched: false }];
    this.watchChange = this.watchChange += 1;
    return this.movies.filter((movie) => movie.watched === true);
  };
}

const myMovieStore = new movieStore();

export default myMovieStore;
