'use strict';

export class ProfileDto {

    constructor(
        public _id: string = null,
        public name: string,
        public email: string,
        public capital: number,
        public divisa: string,
        public prefered_cryptocurrency: string) { }
}
