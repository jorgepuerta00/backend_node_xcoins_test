'use strict';

export interface IFavoriteRepository {
    getAll(): void; 
    getByProfileId(id:String): void; 
}