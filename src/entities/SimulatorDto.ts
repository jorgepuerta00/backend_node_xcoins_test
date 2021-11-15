'use strict';

export class SimulatorDto {

    constructor(
        public _id: string = null,
        public profile_id: String,
        public name: string,
        public start_date: Date,
        public check_date: Date,
        public cryptocurrency: string,
        public divisa: string,
        public Crypto_price_start: number,
        public Crypto_price_check: number
    ) { }
}