import express from "express";
import { FavoriteController } from "../controllers/FavoriteController";

export const router = express.Router();
let favoriteController = new FavoriteController();

router.get("/api/favorite", async (req, res) => favoriteController.get(req, res));
router.get("/api/favorite/:profile_id", async (req, res) => favoriteController.getByProfileId(req, res));
