'use strict';
import { IProfileRepository } from "../../repositories/abstractions/IProfileRepository";
import { IEntityMap } from "../../mapEntities/abstractions/IEntityMap";
import { ProfileDto } from "../../entities/ProfileDto";

export class CreateProfile {

    private _repository: IProfileRepository;
    private _mapEntity: IEntityMap;
    private _profile: ProfileDto;

    constructor(repository: IProfileRepository, mapEntity: IEntityMap) {
        this._repository = repository;
        this._mapEntity = mapEntity;
    }

    setProfileData(profile: ProfileDto): void {
        this._profile = profile;
    }

    async execute() {
        let data = this._mapEntity.serializeToDataEntity(this._profile)
        return this._repository.create(data);
    }
}
