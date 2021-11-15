'use strict';
import { IFavoriteRepository } from "../repositories/abstractions/IFavoriteRepository";
import { IEntityMap } from "../mapEntities/abstractions/IEntityMap";

export class GetAllFavorites {
    
    private _repository: IFavoriteRepository;
    private _mapEntity: IEntityMap;

    constructor(repository: IFavoriteRepository, mapEntity: IEntityMap) {
        this._repository = repository;
        this._mapEntity = mapEntity;
    }
    async execute() {       
        return  this._mapEntity.serializeToDto(await this._repository.getAll());
    }
}
