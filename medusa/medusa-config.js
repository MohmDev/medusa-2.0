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
    [Modules.WORKFLOW_ENGINE]: {
      resolve: '@medusajs/workflow-engine-redis',
      options: {
        redis: {
          url: process.env.WE_REDIS_URL,
        },
      },
    },
    [Modules.AUTH]: {
      resolve: '@medusajs/auth',
      options: {
        providers: [
          {
            resolve: '@medusajs/auth-emailpass',
            id: 'emailpass',
            options: {
              // provider options...
            },
          },
        ],
      },
    },
  },

  admin: {
    path: process.env.ADMIN_PATH || `/dashboard`,
    backendUrl: process.env.MEDUSA_BACKEND_URL || 'http://localhost:9000',
  },

  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    databaseDriverOptions: process.env.NODE_ENV !== 'development' ? { ssl: { rejectUnauthorized: false } } : {},
    redisUrl: process.env.REDIS_URL,
    http: {
      jwtSecret: process.env.JWT_SECRET || 'supersecret',
      cookieSecret: process.env.COOKIE_SECRET || 'supersecret',
      workerMode: process.env.WORKER_MODE || 'shared',
      storeCors: process.env.STORE_CORS,
      authCors: process.env.AUTH_CORS,
      adminCors: process.env.ADMIN_CORS,
      authMethodsPerActor: {
        user: ['emailpass', 'me'],
        users: ['emailpass', 'me'],
        customer: ['emailpass', 'google', 'outlook'],
      },
    },
  },
});
