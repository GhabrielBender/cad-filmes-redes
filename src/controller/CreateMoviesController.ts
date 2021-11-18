import { Request, Response } from "express";
import { CreateMovies } from "../services/CreateMovies";

class CreateMoviesController {
  async handle(request: Request, repsonse: Response) {
    const { title, year, director } = request.body;

    const createMovieService = new CreateMovies();

    const movie = await createMovieService.execute({
      title,
      year,
      director,
    });

    return repsonse.json(movie);
  }
}

export { CreateMoviesController };
