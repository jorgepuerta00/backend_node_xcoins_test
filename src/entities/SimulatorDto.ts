'use strict';

export class SimulatorDto {

    constructor(
        public _id: string = null,
        public name: string,
        public start_date: string,
        public check_date: string,
        public cryptocurrency: string,
        public divisa: string,
        public Crypto_price_start: string,
        public Crypto_price_check: string
    ) { }
}