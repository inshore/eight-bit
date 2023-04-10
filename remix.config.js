/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['**/.*'],
  server: './server.ts',
  serverBuildPath: 'server/index.js',
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/_static/build/'
};

// EOF!
