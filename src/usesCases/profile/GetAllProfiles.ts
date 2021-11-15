'use strict';
import { IProfileRepository } from "../../repositories/abstractions/IProfileRepository";
import { IEntityMap } from "../../mapEntities/abstractions/IEntityMap";

export class GetAllProfiles {

    private _repository: IProfileRepository;
    private _mapEntity: IEntityMap;

    constructor(repository: IProfileRepository, mapEntity: IEntityMap) {
        this._repository = repository;
        this._mapEntity = mapEntity;
    }
    async execute() {
        return this._mapEntity.serializeToDto(await this._repository.getAll());
    }
}
