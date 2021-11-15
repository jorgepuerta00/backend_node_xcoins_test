'use strict';

import { Favorite } from "../../persistence/Favorite";
import { FavoriteDto } from "../../entities/FavoriteDto";
import { IEntityMap } from "../abstractions/IEntityMap";

const _serializeToDataEntity = (entity) => {
    var dataEntity =  new Favorite({
        profile_id: entity.profile_id,
        name: entity.name,
        favorite1: entity.favorite1,
        favorite2: entity.favorite2,
        favorite3: entity.favorite3,
      });
    return JSON.parse(JSON.stringify(dataEntity));
};

const _serializeToDto = (entity) => {
    return new FavoriteDto(
        entity._id,
        entity.profile_id,
        entity.name,
        entity.favorite1,
        entity.favorite2,
        entity.favorite3,
        entity.createdAt,
        entity.updatedAt
    );
}

export class FavoriteEntityMap implements IEntityMap{
    async serializeToDataEntity(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeToDataEntity);
        }
        return _serializeToDataEntity(data);
    }

    async serializeToDto(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeToDto);
        }
        return _serializeToDto(data);
    }
};
