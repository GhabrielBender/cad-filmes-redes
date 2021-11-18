import { getCustomRepository } from "typeorm";
import { MoviesRepositories } from "../repositories/MoviesRepositories";

export class ListMovies {
  async execute() {
    const movies = getCustomRepository(MoviesRepositories);
    const movie = await movies.find({});

    return movie;
  }
}
