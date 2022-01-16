const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "./dist"),
    devServer: {
        https: false,
        port: 8081,
        proxy: {
            "/api": {
                target: "http://localhost:54001",
                ws: true,
                changeOrigin: true
            }
        },
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        disableHostCheck: true
    }
};
