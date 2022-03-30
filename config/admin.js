module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e87d0d419ff85bb4a55f0eabc3937e80'),
  },
});
