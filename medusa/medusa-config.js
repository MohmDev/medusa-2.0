import { loadEnv, defineConfig, Modules } from '@medusajs/utils';

loadEnv(process.env.NODE_ENV, process.cwd());

module.exports = defineConfig({
  modules: {
    [Modules.EVENT_BUS]: {
      resolve: '@medusajs/event-bus-redis',
      options: {
        redisUrl: process.env.EVENTS_REDIS_URL,
      },
    },
    [Modules.CACHE]: {
      resolve: '@medusajs/cache-redis',
      options: {
        redisUrl: process.env.CACHE_REDIS_URL,
      },
    },
  },
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS,
      adminCors: process.env.ADMIN_CORS,
      authCors: process.env.AUTH_CORS,
      jwtSecret: process.env.JWT_SECRET || 'supersecret',
      cookieSecret: process.env.COOKIE_SECRET || 'supersecret',
    },
  },
});
