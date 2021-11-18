import { Router } from "express";

import { CreateMoviesController } from "./controller/CreateMoviesController";

import { ListMoviesController } from "./controller/ListMoviesController";

const router = Router();

const createMoviesController = new CreateMoviesController();
const listMoviesController = new ListMoviesController();

router.post("/movies", createMoviesController.handle);

router.get("/movies", listMoviesController.handle);

export { router };
