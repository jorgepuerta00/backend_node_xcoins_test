'use strict';
import { ISimulatorRepository } from "../abstractions/ISimulatorRepository";
import { Simulator } from "../../persistence/Simulator";

export class SimulatorRepository implements ISimulatorRepository {

    async getAll() {
        return await Simulator.find().lean();
    }

    async getByProfileId(id: string) {
        let query = { profile_id: id };
        return await Simulator.findOne(query);
    }
}