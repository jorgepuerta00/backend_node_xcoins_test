'use strict';

export interface IProfileRepository {
    getAll(): void; 
    create(data): void; 
}