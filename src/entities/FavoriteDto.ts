'use strict';

export class FavoriteDto {

    constructor(
        public _id: String = null,
        public profile_id: String,
        public name: String,
        public favorite1: Number,
        public favorite2: String,
        public favorite3: String,
        public createdAt: Date,
        public updatedAt: Date
        ) { }
}
