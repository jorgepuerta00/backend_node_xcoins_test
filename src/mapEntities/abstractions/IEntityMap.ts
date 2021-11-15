'use strict';

export interface IEntityMap {
    serializeToDataEntity(data): void; 
    serializeToDto(data): void; 
}