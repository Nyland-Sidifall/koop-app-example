const config = require("config");
const Koop = require("@koopjs/koop-core");
const routes = require("./routes");
const plugins = require("./plugins");
const provider = require("koop-provider-postgis");
const btoa = require("btoa");

// initiate a koop app with an empty options object
const koop = new Koop({});

// register the provider
koop.register(provider, {});

// register koop plugins
plugins.forEach((plugin) => {
  koop.register(plugin.instance, plugin.options);
});

// add additional routes
routes.forEach((route) => {
  route.methods.forEach((method) => {
    koop.server[method](route.path, route.handler);
  });
});

let encodedStatement = btoa("SELECT * FROM nyc_neighborhoods;");
console.log(encodedStatement.replaceAll("/", "_"));

// start the server
koop.server.listen(config.port, () =>
  koop.log.info(`Koop server listening at ${config.port}`)
);
