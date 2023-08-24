const koopProviderPg = require('./koop-provider-pg/initialize')();
const outputs = [];
const auths = [];
const caches = [];
const plugins = [koopProviderPg];
module.exports = [...outputs, ...auths, ...caches, ...plugins];