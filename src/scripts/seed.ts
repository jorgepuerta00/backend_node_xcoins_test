import mongoose from "mongoose";
import _ from "lodash";
import { Profile } from "../persistence/Profile";
import { Simulator } from "../persistence/Simulator";
import { Favorite } from "../persistence/Favorite";
import { DBURL } from "../config";

(async () => {

  mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const profile = new Profile({
    name: `String`,
    email: `String`,
    capital: `123`,
    divisa: `String`,
    prefered_cryptocurrency: `String`,
  });
  await profile.save();

  const query = { _id: profile._id };
  const idProfile = await Profile.findOne(query).then((e) => {
    return e?._id;
  });

  const simulator = new Simulator({
    profile_id: idProfile,
    name: `String`,
    start_date: `01/05/2021`,
    check_date: `01/05/2021`,
    cryptocurrency: `String`,
    divisa: `String`,
    Crypto_price_start: `123`,
    Crypto_price_check: `123`,
  });
  await simulator.save();

  const favorite = new Favorite({
    profile_id: idProfile,
    name: `String`,
    favorite1: `String`,
    favorite2: `String`,
    favorite3: `String`,
  });
  await favorite.save();

  mongoose.disconnect();
})();
