'use strict';

import { SimulatorRepository } from "../repositories/implementation/SimulatorRepository";
import { SimulatorEntityMap } from "../mapEntities/implementation/SimulatorEntityMap";
import { GetAllSimulators } from "../usesCases/Simulator/GetAllSimulators";
import { GetSimulatorByProfileId } from "../usesCases/Simulator/GetSimulatorByProfileId";

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
}
