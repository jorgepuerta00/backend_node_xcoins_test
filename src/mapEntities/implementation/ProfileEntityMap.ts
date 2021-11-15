'use strict';

import { Profile } from "../../persistence/Profile";
import { ProfileDto } from "../../entities/ProfileDto";
import { IEntityMap } from "../abstractions/IEntityMap";

const _serializeToDataEntity = (entity) => {
    var dataEntity = new Profile({
        name: entity.name,
        email: entity.email,
        capital: entity.capital,
        divisa: entity.divisa,
        prefered_cryptocurrency: entity.prefered_cryptocurrency,
    });
    return JSON.parse(JSON.stringify(dataEntity));
};

const _serializeToDto = (entity) => {
    return new ProfileDto(
        entity._id,
        entity.name,
        entity.email,
        entity.capital,
        entity.divisa,
        entity.prefered_cryptocurrency
    );
}

export class ProfileEntityMap implements IEntityMap {
    serializeToDataEntity(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeToDataEntity);
        }
        return _serializeToDataEntity(data);
    }

    serializeToDto(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeToDto);
        }
        return _serializeToDto(data);
    }
};
