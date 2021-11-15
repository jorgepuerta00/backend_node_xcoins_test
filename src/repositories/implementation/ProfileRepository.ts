'use strict';
import { Profile } from "../../persistence/Profile";
import { IProfileRepository } from "../abstractions/IProfileRepository";

export class ProfileRepository implements IProfileRepository {

  async getAll() {
    return await Profile.find().lean();
  }

  async create(data) {
console.log(data.email)
    let profile = await Profile.findOne({
      $or: [{ email: data.email }, { nickname: data.nickname }],
    }).exec();

    if (!profile) {
      profile = await Profile.create({
        email: data.email,
        name: data.name,
        capital: data.capital,
        divisa: data.divisa,
        prefered_cryptocurrency: data.prefered_cryptocurrency
      });
    }

    return profile;
  }
}