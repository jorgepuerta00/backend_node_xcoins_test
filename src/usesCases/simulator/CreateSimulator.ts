'use strict';
import { ISimulatorRepository } from "../../repositories/abstractions/ISimulatorRepository";
import { IEntityMap } from "../../mapEntities/abstractions/IEntityMap";
import { SimulatorDto } from "../../entities/SimulatorDto";

export class CreateSimulator {

    private _repository: ISimulatorRepository;
    private _mapEntity: IEntityMap;
    private _Simulator: SimulatorDto;

    constructor(repository: ISimulatorRepository, mapEntity: IEntityMap) {
        this._repository = repository;
        this._mapEntity = mapEntity;
    }

    setSimulatorData(Simulator: SimulatorDto): void {
        this._Simulator = Simulator;
    }

    async execute() {
        let data = this._mapEntity.serializeToDataEntity(this._Simulator)
        return this._repository.create(data);
    }
}
