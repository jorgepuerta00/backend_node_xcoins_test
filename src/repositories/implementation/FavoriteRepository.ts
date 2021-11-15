'use strict';
import { IFavoriteRepository } from "../abstractions/IFavoriteRepository";
import { Favorite } from "../../persistence/Favorite";

export class FavoriteRepository implements IFavoriteRepository {

    async getAll() {
        return await Favorite.find().lean();
    }

    async getByProfileId(id: string) {
        let query = { profile_id: id };
        return await Favorite.findOne(query);
    }
}