import express from "express";
import { SimulatorController } from "../controllers/SimulatorController";

export const router = express.Router();
let simulatorController = new SimulatorController();

router.get("/api/simulator", async (req, res) => simulatorController.get(req, res));
router.get("/api/simulator/:profile_id", async (req, res) => simulatorController.getByProfileId(req, res));
router.post("/api/simulator", async (req, res) =>  simulatorController.create(req, res));