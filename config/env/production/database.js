const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => {

    // console.log('env below')
    // console.log(env)
    // console.log('process nev below')
    // console.log(process.env.DATABASE_URL);
    console.log(config.host);
    return {
    connection: {
      client: "postgres",
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      debug: false,
    },
  };
};
