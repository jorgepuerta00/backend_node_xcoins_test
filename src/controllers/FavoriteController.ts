'use strict';

import { FavoriteRepository } from "../repositories/implementation/FavoriteRepository";
import { FavoriteEntityMap } from "../mapEntities/implementation/FavoriteEntityMap";
import { GetAllFavorites } from "../usesCases/favorite/GetAllFavorites";
import { GetFavoriteByProfileId } from "../usesCases/favorite/GetFavoriteByProfileId";

export class FavoriteController {

    public _favoriteRepository: FavoriteRepository;
    public _mapEntity: FavoriteEntityMap;

    constructor() {
        this._favoriteRepository = new FavoriteRepository();
        this._mapEntity = new FavoriteEntityMap();
    }

    async get(req, res) {
        const useCase = new GetAllFavorites(this._favoriteRepository,this._mapEntity);
        const favorite = await useCase.execute();
        return res.json({ favorite });
    }

    async getByProfileId(req, res) {
        const useCase = new GetFavoriteByProfileId(this._favoriteRepository, this._mapEntity);
        useCase.setProfileId(req.params.profile_id);
        const data = await useCase.execute();
        res.json(data);
    }
}
