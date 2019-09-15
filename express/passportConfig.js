const { Strategy, ExtractJwt } = require("passport-jwt");

const { JWT_SECRET } = require("../config/secrets");

const passportJwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
};

module.exports = passport =>
  passport.use(
    "jwt-and-load-user",
    new Strategy(passportJwtOptions, async function(jwt_payload, done) {
      done(null, jwt_payload);
    })
  );
