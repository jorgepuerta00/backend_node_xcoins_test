import express from "express";
import { Profile } from "../persistence/Profile";
import { ProfileController } from "../controllers/ProfileController";

export const router = express.Router();
let profileController = new ProfileController();

router.get("/api/profile", async (req, res) => profileController.get(req, res));

router.post("/api/profile", async (req, res) =>  profileController.create(req, res));
