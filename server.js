var assign = require('lodash/assign');
var Bundler = require('parcel-bundler');
var serve = require('browser-sync');
var proxy = require('http-proxy-middleware');
var compress = require('compression');

var bundler = new Bundler('index.html');
serve({
  port: process.env.PORT || 3132,
  open: true,
  server: { baseDir: 'dist', https: false },
  middleware: [
    // proxy(`${envConfig.endpoint}/api`, assign({}, proxyConfig)),
    // proxy(`${envConfig.endpoint}/auth`, assign({}, proxyConfig)),
    compress(),
    bundler.middleware()
  ]
});
