module.exports = {
  apps: [
    {
      name: 'nutrieasy',
      script: 'src/shared/infra/http/server.js',
      cwd: '',
      exec_mode: 'cluster',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
