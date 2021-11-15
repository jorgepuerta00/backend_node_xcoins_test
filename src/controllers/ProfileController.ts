'use strict';

import { ProfileRepository } from "../repositories/implementation/ProfileRepository";
import { ProfileEntityMap } from "../mapEntities/implementation/ProfileEntityMap";
import { GetAllProfiles } from "../usesCases/profile/GetAllProfiles";
import { CreateProfile } from "../usesCases/profile/CreateProfile";
import { ProfileDto } from "../entities/ProfileDto";

export class ProfileController {

    public _profileRepository: ProfileRepository;
    public _mapEntity: ProfileEntityMap;

    constructor() {
        this._profileRepository = new ProfileRepository();
        this._mapEntity = new ProfileEntityMap();
    }

    async get(req, res) {
        const useCase = new GetAllProfiles(this._profileRepository, this._mapEntity);
        const data = await useCase.execute();
        return res.json(data);
    }

    async create(req, res) {
        var { email, name, capital, divisa, prefered_cryptocurrency } = req.body;
        const useCase = new CreateProfile(this._profileRepository, this._mapEntity);
        useCase.setProfileData(new ProfileDto(null, name, email, capital, divisa, prefered_cryptocurrency));
        const data = await useCase.execute();
        res.json(data);
    }
}
