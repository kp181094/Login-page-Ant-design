const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#001e39",
              "@link-color": "#235347",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
