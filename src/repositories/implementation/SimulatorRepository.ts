'use strict';
import { ISimulatorRepository } from "../abstractions/ISimulatorRepository";
import { Simulator } from "../../persistence/Simulator";

export class SimulatorRepository implements ISimulatorRepository {

    async getAll() {
        return await Simulator.find().lean();
    }

    async getByProfileId(id: string) {
        let query = { simulator_id: id };
        return await Simulator.findOne(query);
    }
    
    async create(data) {
        let simulator = await Simulator.findOne({
          $or: [{ name: data.name } ],
        }).exec();
    
        if (!simulator) {
          simulator = await simulator.create({
            name: data.name,
            start_date: data.start_date,
            check_date: data.check_date,
            cryptocurrency: data.cryptocurrency,
            Crypto_price_start: data.Crypto_price_start,
            Crypto_price_check: data.Crypto_price_check
          });
        }
    
        return simulator;
      }
}