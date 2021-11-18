import { getCustomRepository } from "typeorm";
import { MoviesRepositories } from "../repositories/MoviesRepositories";

interface IMovieRequest {
  title: string;
  year: string;
  director: string;
}

export class CreateMovies {
  async execute({ title, year, director }: IMovieRequest) {
    const usersRepository = getCustomRepository(MoviesRepositories);

    if (!title) {
      throw new Error("title incorrect");
    }
    if (!year) {
      throw new Error("year incorrect");
    }
    if (!director) {
      throw new Error("director incorrect");
    }

    const userAlreadyExists = await usersRepository.findOne({
      title,
    });

    if (userAlreadyExists) {
      throw new Error("Movie already exists");
    }

    const movie = usersRepository.create({
      title,
      year,
      director,
    });

    await usersRepository.save(movie);

    return movie;
  }
}
