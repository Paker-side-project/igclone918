module.exports = {
  context: __dirname,
  entry: {
    main: "./src/index.js",
  },
  builtins: {
    html: [
      {
        template: "./public/index.html",
      },
    ],
  },
  module: {
    rules: [
      {
        test: /src\/.*\.js$/,
        type: "jsx",
      },
      {
        test: /src\/.*\.js$/,
        type: "tsx",
      },
    ],
  },
};
