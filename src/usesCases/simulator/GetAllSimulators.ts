'use strict';
import { ISimulatorRepository } from "../../repositories/abstractions/ISimulatorRepository";
import { IEntityMap } from "../../mapEntities/abstractions/IEntityMap";

export class GetAllSimulators {
    
    private _repository: ISimulatorRepository;
    private _mapEntity: IEntityMap;

    constructor(repository: ISimulatorRepository, mapEntity: IEntityMap) {
        this._repository = repository;
        this._mapEntity = mapEntity;
    }
    async execute() {       
        return  this._mapEntity.serializeToDto(await this._repository.getAll());
    }
}
