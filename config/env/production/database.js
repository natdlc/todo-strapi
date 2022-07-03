const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => {
    return {
    connection: {
      client: "postgres",
      connection: {
        host: "ec2-23-23-151-191.compute-1.amazonaws.com",
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
