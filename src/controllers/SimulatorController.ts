'use strict';

import { SimulatorRepository } from "../repositories/implementation/SimulatorRepository";
import { SimulatorEntityMap } from "../mapEntities/implementation/SimulatorEntityMap";
import { GetAllSimulators } from "../usesCases/Simulator/GetAllSimulators";
import { GetSimulatorByProfileId } from "../usesCases/Simulator/GetSimulatorByProfileId";
import { CreateSimulator } from "../usesCases/simulator/CreateSimulator";
import { SimulatorDto } from "../entities/SimulatorDto";

export class SimulatorController {

  public _SimulatorRepository: SimulatorRepository;
  public _mapEntity: SimulatorEntityMap;

  constructor() {
    this._SimulatorRepository = new SimulatorRepository();
    this._mapEntity = new SimulatorEntityMap();
  }

  async get(req, res) {
    const useCase = new GetAllSimulators(this._SimulatorRepository,this._mapEntity);
    const Simulator = await useCase.execute();
    return res.json({ Simulator });
  }

  async getByProfileId(req, res) {
    const useCase = new GetSimulatorByProfileId(this._SimulatorRepository, this._mapEntity);
    useCase.setProfileId(req.params.profile_id);
    const data = await useCase.execute();
    res.json(data);
  }

  async create(req, res) {
    const { profile_id, name, start_date, check_date, cryptocurrency, divisa, crypto_price_start, crypto_price_check } = req.body;
    const useCase = new CreateSimulator(this._SimulatorRepository, this._mapEntity);
    useCase.setSimulatorData(new SimulatorDto(null, profile_id, name, start_date, check_date, cryptocurrency, divisa, crypto_price_start, crypto_price_check));
    const data = await useCase.execute();
    res.json(data);
}
}
