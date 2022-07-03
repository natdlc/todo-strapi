module.exports = ({ env }) => {
  return ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7e137382cd63cf1aebca84bd833864b8'),
    },
  },
})};
