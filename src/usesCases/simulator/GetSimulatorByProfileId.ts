'use strict';
import { ISimulatorRepository } from "../../repositories/abstractions/ISimulatorRepository";
import { IEntityMap } from "../../mapEntities/abstractions/IEntityMap";

export class GetSimulatorByProfileId {

    private _repository: ISimulatorRepository;
    private _mapEntity: IEntityMap;
    private _profileId: String;

    constructor(repository: ISimulatorRepository, mapEntity: IEntityMap) {
        this._repository = repository;
        this._mapEntity = mapEntity;
    }

    setProfileId(profileId: string): void {
        this._profileId = profileId;
    }

    async execute() {
        return this._mapEntity.serializeToDto(await this._repository.getByProfileId(this._profileId));
    }
}
