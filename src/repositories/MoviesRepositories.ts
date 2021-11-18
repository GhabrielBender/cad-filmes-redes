import { EntityRepository, Repository } from "typeorm";
import { Movie } from "../entities/Movie";

@EntityRepository(Movie)
class MoviesRepositories extends Repository<Movie> {}

export { MoviesRepositories };
