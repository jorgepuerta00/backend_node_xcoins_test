'use strict';
import { IFavoriteRepository } from "../repositories/abstractions/IFavoriteRepository";
import { IEntityMap } from "../mapEntities/abstractions/IEntityMap";

export class GetFavoriteByProfileId {

    private _repository: IFavoriteRepository;
    private _mapEntity: IEntityMap;
    private _profileId: String;

    constructor(repository: IFavoriteRepository, mapEntity: IEntityMap) {
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
