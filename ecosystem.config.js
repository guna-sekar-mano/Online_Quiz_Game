module.exports = {
  apps: [
    {
      name: 'NextAppName',
      exec_mode: 'cluster',
      script: 'node_modules/next/dist/bin/next',
      watch:true,
      args: 'start',
      env_local: {
        APP_ENV: 'local' // APP_ENV=local
      },
      env_development: {
        APP_ENV: 'dev' // APP_ENV=dev
      },
      env_production: {
        APP_ENV: 'prod' // APP_ENV=prod
      }
    }
  ]
}
