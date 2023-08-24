const koopProviderPg = require('koop-provider-pg');
function initialize() {
  return {
    instance: koopProviderPg
  };
}
module.exports = initialize;