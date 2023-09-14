import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validationschema } from "../middlewares/validation-schema";
import { musicSchema } from "../schemas/music-schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validationschema(musicSchema), musicController.createMusic);

export default musicRouter;