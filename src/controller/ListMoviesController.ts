import { Request, Response } from "express";
import { ListMovies } from "../services/ListMovies";

export class ListMoviesController {
  async handle(request: Request, response: Response) {
    const listMovieService = new ListMovies();

    const movies = await listMovieService.execute();

    return response.json(movies);
  }
}
