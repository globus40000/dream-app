module.exports = [
    {
        context: [
            "/google",
            "/search"
        ],
        target: "https://google.com",
        secure: false,
        pathRewrite: {
            "/.*": ""
        },
        changeOrigin: true,
        bypass: function(req, res, proxyOptions) {
            if (/^\/search.*/.test(req.url)) {
                console.log('Skipping proxy for "/search" context');
                return "/index.html";
            }
        }
    }
];
