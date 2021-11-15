'use strict';

import { Simulator } from "../../persistence/Simulator";
import { SimulatorDto } from "../../entities/SimulatorDto";
import { IEntityMap } from "../abstractions/IEntityMap";

const _serializeToDataEntity = (entity) => {
    var dataEntity =  new Simulator({
        profile_id: entity.profile_id,
        name: entity.name,
        start_date: entity.start_date,
        check_date: entity.check_date,
        cryptocurrency: entity.cryptocurrency,
        divisa: entity.divisa,
        Crypto_price_start: entity.Crypto_price_start,
        Crypto_price_check: entity.Crypto_price_check,
      });
    return JSON.parse(JSON.stringify(dataEntity));
};

const _serializeToDto = (entity) => {
    return new SimulatorDto(
        entity._id,
        entity.profile_id,
        entity.name,
        entity.start_date,
        entity.check_date,
        entity.cryptocurrency,
        entity.divisa,
        entity.Crypto_price_start,
        entity.Crypto_price_check
    );
}

export class SimulatorEntityMap implements IEntityMap{
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
