'use strict';

export interface ISimulatorRepository {
    getAll(): void; 
    getByProfileId(id:String): void; 
    create(data): void; 
}