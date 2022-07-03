module.exports = ({ env }) => {
    console.log(env("MY_HEROKU_URL"));
    
    return ({
    proxy: true,
    url: env('MY_HEROKU_URL'),
    app: { 
      keys: env.array('APP_KEYS')
    },
  })}
