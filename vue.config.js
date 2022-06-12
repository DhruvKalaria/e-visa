module.exports = {
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
module.exports = {
  devServer: {
    proxy: 'http://localhost:8000/'
  }
}
// module.exports = {
//   devServer: {
//     proxy: {
//       "/api": {
//         target: "http://127.0.0.1:8000",
//         changeOrigin: true,
//         pathRewrite: {
//           "^/api": "",
//         },
//       },
//     },
//   },
// }

